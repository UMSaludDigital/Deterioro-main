using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ResetLocationComponent : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    private void OnTriggerEnter(Collider other)
    {
        //Debug.Log("ontrigger enter");
        if (other.gameObject.layer==6)
        {

          //  Debug.Log("ontrigger enter2");
           // other.gameObject.GetComponent<ObjetoAtrapable>().ReturnToInitialLocation();
        }
    }
}
