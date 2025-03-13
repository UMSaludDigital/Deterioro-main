using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HandResizer : MonoBehaviour
{
    public bool rescaledHand = false;
    public string handName;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

        GameObject mano = GameObject.Find(handName);
        
        if (mano!=null && !rescaledHand)
        {
            mano.transform.localScale = Vector3.one;
            rescaledHand = true;
        }

    }
}
