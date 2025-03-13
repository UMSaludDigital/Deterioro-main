using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class user : MonoBehaviour
{
    private string name_user;

    private string lastname;

    private string cedula;

    private string telephone;

    private string email;


    private DateTime birthday;

    public user (string name, string lastname, string cedula)
    {
        name_user = name;
        this.lastname = lastname;
        this.cedula = cedula;

    }
    public user (string cedula)
    {
        name_user = "Maria Fernanda";
        lastname = "Holguin";
        cedula = "12345678";
        birthday = new DateTime(1999, 07, 12);
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }
    

}
