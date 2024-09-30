using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Runtime.InteropServices;
using UnityEngine.SceneManagement;
using UnityEngine.Events;

public class Interaccion : MonoBehaviour {

    public string elemento;

    public UnityEvent inicializar;
    public UnityEvent entro;
    public UnityEvent salio;

    public bool contacto { get; set; }
    public GameObject objeto { get; set; }

    public void Awake()
    {
        inicializar.Invoke();
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.name == elemento && contacto == false)
        {
          
            objeto = other.gameObject;
            contacto = true;           
            entro.Invoke();
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.name == elemento && contacto == true)
        {
            objeto = null;
            contacto = false;
            salio.Invoke();
        }
    }
}
