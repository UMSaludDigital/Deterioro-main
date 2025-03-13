using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class KeyboardTest : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("Dispositivos " + InputSystem.devices.Count + " tipos "+InputSystem.devices[0].displayName + " tipos " + InputSystem.devices[1].displayName + " tipos " + InputSystem.devices[2].displayName);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
