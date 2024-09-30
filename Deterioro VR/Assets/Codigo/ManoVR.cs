using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class ManoVR : MonoBehaviour
{
    public InputActionProperty botonGrip;
    public Animator controladorAnimacion;

    // Update is called once per frame
    void Update()
    {
        float valorAccion = botonGrip.action.ReadValue<float>();
        controladorAnimacion.SetFloat("Presionar",valorAccion);
    }

    public void CambiarMano(Animator animacion)
    {
        controladorAnimacion = animacion;
    }
}
