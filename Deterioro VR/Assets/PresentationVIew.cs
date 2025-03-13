using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem.XR;

public class PresentationVIew : MonoBehaviour
{
    public TrackedPoseDriver poseDriver;
    // Start is called before the first frame update
    void Start()
    {
        poseDriver = this.GetComponent<TrackedPoseDriver>();
        //poseDriver.trackingType = TrackedPoseDriver.TrackingType.PositionOnly;
        //StartCoroutine(canMove());
    }
    public IEnumerator canMove()
    {
        yield return new WaitForSeconds(5);
        poseDriver.trackingType = TrackedPoseDriver.TrackingType.RotationAndPosition;
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
