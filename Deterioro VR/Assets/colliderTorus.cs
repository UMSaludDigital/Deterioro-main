using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class colliderTorus : MonoBehaviour
{
    public bool visited;

    public string hand_expected;
    public string hand_visited;
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
        if (other.CompareTag("Right")|| other.CompareTag("Left"))
        {
            if (other.tag == hand_expected)
            { Debug.Log("Collider de tipo: " + other.name + "/" + other.tag + " en cubo " + this.name);
                visited = true;
            }
        }
        
    }
}
