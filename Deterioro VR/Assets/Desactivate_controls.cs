using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem.XR;
using UnityEngine.XR;

public class Desactivate_controls : MonoBehaviour
{
    public TrackedPoseDriver controlador;
    // Start is called before the first frame update
    void Start()
    {
        Desactivate_camera();
        //StartCoroutine(activate_camera());
    }
    
    public void Desactivate_camera()
    {
        controlador.enabled = false;
    }
    public void activate_camera()
    {
        Debug.Log("Se supone que ya estoy activado");
        controlador.enabled = true;
    }
}
