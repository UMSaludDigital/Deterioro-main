using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Security_api : MonoBehaviour
{



    // Start is called before the first frame update
    void Start()
    {
        
    }
    public void CreateUser(string cedula, string pass)
    {
        user newUser = new user(cedula);
        GameManager.Instance.activeUser = newUser;
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
