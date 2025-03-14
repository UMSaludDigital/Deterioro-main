using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Animator))]
public class Hand : MonoBehaviour
{
    // Animation
    [SerializeField] private float animationSpeed;
    private Animator _animator;
    private SkinnedMeshRenderer _mesh;
    private float _gripTarget;
    private float _triggerTarget;
    private float _gripCurrent;
    private float _triggerCurrent;
    private const string AnimatorGripParam = "Grip";
    private const string AnimatorTriggerParam = "Trigger";
    private static readonly int Grip = Animator.StringToHash(AnimatorGripParam);
    private static readonly int Trigger = Animator.StringToHash(AnimatorTriggerParam);
    
    // Physics Movement
    [SerializeField] private GameObject followObject;
    [SerializeField] private float followSpeed = 30f;
    [SerializeField] private float rotateSpeed = 100f;
    [SerializeField] private Vector3 positionOffset;
    [SerializeField] private Vector3 rotationOffset;
    private Transform _followTarget;
    private Rigidbody _body;

    private void Start()
    {
        // Animation
        _animator = GetComponent<Animator>();
        _mesh = GetComponentInChildren<SkinnedMeshRenderer>();
        
        // Physics Movement
        _followTarget = followObject.transform;
        _body = GetComponent<Rigidbody>();
        _body.collisionDetectionMode = CollisionDetectionMode.Continuous;
        _body.interpolation = RigidbodyInterpolation.Interpolate;
        _body.mass = 20f;
        
        // Teleport hands
        _body.position = _followTarget.position;
        Quaternion newRotation = _followTarget.rotation;
        /*if (name.Contains("Left"))
        {
            Debug.Log("Hey, mano izquierda");
            newRotation.z = 90;
        }
        else
            newRotation.z = -90;
            */
        _body.rotation = newRotation;
    }

    private void Update()
    {
        AnimateHand();

        PhysicsMove();
    }

    private void PhysicsMove()
    {
        // Position
        var positionWithOffset = _followTarget.position + positionOffset;
        var distance = Vector3.Distance(positionWithOffset, transform.position);
        _body.velocity = (positionWithOffset - transform.position).normalized * (followSpeed * distance);

        // Rotation
        var rotationWithOffset = _followTarget.rotation * Quaternion.Euler(rotationOffset);
        var q = rotationWithOffset * Quaternion.Inverse(_body.rotation);
        q.ToAngleAxis(out float angle, out Vector3 axis);
        _body.angularVelocity = axis * (angle * Mathf.Deg2Rad * rotateSpeed);
    }

    internal void SetGrip(float v)
    {
        _gripTarget = v;
    }

    internal void SetTrigger(float v)
    {
        _triggerTarget = v;
    }

    private void AnimateHand()
    {
        if (Math.Abs(_gripCurrent - _gripTarget) > 0)
        {
            _gripCurrent = Mathf.MoveTowards(_gripCurrent, _gripTarget, Time.deltaTime * animationSpeed);
            _animator.SetFloat(Grip, _gripCurrent);
        }

        if (!(Math.Abs(_triggerCurrent - _triggerTarget) > 0)) return;
        
        _triggerCurrent = Mathf.MoveTowards(_triggerCurrent, _triggerTarget, Time.deltaTime * animationSpeed);
        _animator.SetFloat(Trigger, _triggerCurrent);
    }
    public IEnumerator WaitForPhysics()
    {
        yield return new WaitForSeconds(1);
        _body.isKinematic = !_body.isKinematic;
        _mesh.enabled = !_mesh.enabled;
    }
    public void ToggleVisibility()
    {
        if (!_mesh.enabled)
        {
            StartCoroutine(WaitForPhysics());
        }
        else
        {
            _body.isKinematic = !_body.isKinematic;
            _mesh.enabled = !_mesh.enabled;
        }
    }
}