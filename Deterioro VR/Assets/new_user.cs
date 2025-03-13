
using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class new_user : MonoBehaviour
{

    public TextMeshProUGUI name_text;
    public TextMeshProUGUI last_name;

    public TextMeshProUGUI id_person;
    public TextMeshProUGUI telephone_num;

    public TextMeshProUGUI email;
    public TextMeshProUGUI days;
    public TextMeshProUGUI months;
    public TextMeshProUGUI years;

    string name_string;
    
    // Start is called before the first frame update
    void Start()
    {
        
    }
    

    public void AddData()
    {
        string lastname_str;
        string id_person_str;
        string telephone_number_str;
        string email_str;
        int years_int = Int32.Parse(years.text);

        int months_int = Int32.Parse(months.text);

        int days_int = Int32.Parse(days.text);
        System.DateTime date = new System.DateTime(years_int, months_int, days_int);

        name_string = name_text.text;
        lastname_str = last_name.text;
        id_person_str = id_person.text;
        telephone_number_str = telephone_num.text;
        email_str = email.text;

        user user = new user(name_string, lastname_str, id_person_str);
        //user.
        //Convertir en json y crear usuario

    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
