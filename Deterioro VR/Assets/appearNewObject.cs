using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class appearNewObject : MonoBehaviour
{
    public GameObject newPositionCube;
    // Start is called before the first frame update
    void Start()
    {
        newPositionCube.transform.position = this.transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
