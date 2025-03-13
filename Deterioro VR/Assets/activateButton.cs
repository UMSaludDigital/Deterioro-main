using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class activateButton : MonoBehaviour
{
    public bool status_button;
    public bool pressed_button_left;

    public bool pressed_button_right;
    public Button finishButton; 
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {//Adicionar validacion de campos
        if ((pressed_button_left|| pressed_button_right))
        {

            Debug.Log("Listo para terminar ");
            pressed_button_right = false;
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        Debug.Log("Entre a boton " + other.gameObject.name);
        status_button = true;

    }
    private void OnTriggerExit(Collider other)
    {
        status_button = false;
    }
}
