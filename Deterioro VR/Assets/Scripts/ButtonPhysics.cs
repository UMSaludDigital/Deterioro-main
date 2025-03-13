using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class ButtonPhysics : MonoBehaviour
{
    [SerializeField] private float threshold = 0.1f;
    [SerializeField] private float deadzone = 0.025f;

    [SerializeField] private bool _isPressed;
    [SerializeField] private Vector3 _startPos;
    [SerializeField] private ConfigurableJoint _joint;

    public UnityEvent onPressed, onReleased;

    // Start is called before the first frame update
    void Start()
    {
        _startPos = transform.localPosition;
        _joint = GetComponent<ConfigurableJoint>();
    }

    // Update is called once per frame
    void Update()
    {
        if (!_isPressed && GetValue() + threshold >=1)
        {
            Pressed();
        }
        if (!_isPressed && GetValue() - threshold <=0)
        {
            Released();

        }
    }

    private float GetValue()
    {
        var value = Vector3.Distance(_startPos, transform.localPosition) / _joint.linearLimit.limit;
        if (Math.Abs(value) <deadzone)
        {
            return 0;
        }

        return Mathf.Clamp(value, -1f, 1f);
    }
    public IEnumerator ChangeStatePressed()
    {
        yield return new WaitForSeconds(3);
        _isPressed = false;
    }
    private void Pressed()
    {
        _isPressed = true;
        onPressed.Invoke();
        //Debug.Log("Pressed");
        StartCoroutine(ChangeStatePressed());
    }
    private void Released()
    {

        onReleased.Invoke();
        //Debug.Log("Released");

        
    }
}
