using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjetoAtrapable : MonoBehaviour
{
    public Vector3 resetLocation;
    public Quaternion resetRotation;
   
    // Start is called before the first frame update
    void Start()
    {
        Vector3 resetLocation = this.transform.position;
        Quaternion resetRotation = this.transform.rotation;
    }

    public void ReturnToInitialLocation()
    {
        Debug.Log("ontrigger enter3");
        this.transform.position = resetLocation;
        this.transform.rotation = resetRotation;
    }
    
}
