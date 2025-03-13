using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    private static GameManager _instance;
    public int _tipo_juego;
    public int _dificultad;
    //Valida si previamente ha realizado algún otro sim
    public int _status = 0;
    public bool _firstTime;
    public user activeUser;

    public static GameManager Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = GameObject.FindObjectOfType<GameManager>();
            }

            return _instance;
        }
    }

    public void ChangeGameType(int tipo_juego)
    {
        _tipo_juego = tipo_juego;
    }
    public void ChangeDifficultNumber(int dificultad)
    {
        _dificultad = dificultad;
    }
    void Awake()
    {
        DontDestroyOnLoad(gameObject);
    }
}
