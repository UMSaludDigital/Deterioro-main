using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Memoria : MonoBehaviour
{
    public int difficult;
    public List<GameObject> objetosAMemorizar = new List<GameObject>();
    // Start is called before the first frame update
    void Start()
    {
        
    }

    public void FillObjetos()
    {
        switch (difficult)
        {
            case (1):
                //Aleatorio sencillo
                objetosAMemorizar.Add(new GameObject());
                break;
            case (2):
                break;
            case (3):
                break;
            default:
                //easy
                break;
                
        }

    }

}