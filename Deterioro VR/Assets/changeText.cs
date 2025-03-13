using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class changeText : MonoBehaviour
{
    public ManagerEscenas manager;
    // Start is called before the first frame update
    void Start()
    {
        if (manager.classroom_mode)
        {
            this.gameObject.GetComponent<TextMeshProUGUI>().text = "Acomoda las gafas para que queden bien en el rostro y toma los controles correspondientes a cada mano.\n Presiona comenzar cuando el alumno esté listo";
        }
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
