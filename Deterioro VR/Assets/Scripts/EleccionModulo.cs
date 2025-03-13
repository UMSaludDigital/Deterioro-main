using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EleccionModulo : MonoBehaviour
{

    public string type;
    public int difficult;
    public SeguimientoInstrucciones intrucciones;
    public Memoria memoria;

    public void ChooseGame()
    {
        if (type.Equals("memoria"))
        {
            //memoria
        }
        else if (type.Equals("instrucciones"))
        {
            //llamado a instrucciones
        }

    }
    /*
     * Difficult number:
     * 1:easy
     * 2:medium
     * 3:hard
     */
    public void SetDifficult(int diff)
    {
        difficult = diff;
    }

    public void SetType(string type)
    {
        this.type = type;
    }


}
