using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeLocation : MonoBehaviour
{

    public Transform scenario1Location;
    public Transform scenario2Location;

    // Start is called before the first frame update
    void Start()
    {
        if (GameManager.Instance != null)
        {
            if (GameManager.Instance._tipo_juego == 0)
            {
                this.transform.localPosition = scenario1Location.localPosition;
                this.transform.rotation = scenario1Location.rotation;
            }
            else if (GameManager.Instance._tipo_juego == 1)
            {
                this.transform.localPosition = scenario2Location.localPosition;
                this.transform.rotation = scenario2Location.rotation;
            }
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
