using System.Collections;
using System.Collections.Generic;
using Unity.XR.CoreUtils;
using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class CharacterMovementHelper : MonoBehaviour
{
    // Start is called before the first frame update

    private XROrigin xRRig;
    private CharacterController characterController;
    private CharacterControllerDriver driver;
    // Update is called once per frame

    private void Start()
    {
        xRRig = GetComponent <XROrigin>();
        characterController = GetComponent<CharacterController >();
        driver = GetComponent < CharacterControllerDriver >();
    }
    void Update()
    {
        UpdateCharacterController();
    }

    /// «summary>
    /// Update the ‹see cref="CharacterController.height"/> and ‹see cref="CharacterController.center"/>
    /// based on the camera's position.
    /// </summary>
    protected virtual void UpdateCharacterController ()
    {  
        if (xRRig == null || characterController == null)
        return;
        var height = Mathf.Clamp(xRRig.CameraInOriginSpaceHeight, driver.minHeight, driver.maxHeight);
        Vector3 center = xRRig.CameraInOriginSpacePos;
        center.y = height / 2f + characterController.skinWidth;
        characterController.height = height;
        characterController.center = center;
    }
}
