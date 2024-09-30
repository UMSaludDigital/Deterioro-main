using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class PersonajeVR : MonoBehaviour
{
    public void Teletrasportacion(Transform ubicacion)
    {
        transform.position = ubicacion.position;
        transform.rotation = ubicacion.rotation;
    }
}
