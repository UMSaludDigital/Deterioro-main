using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class ManagerEscenas : MonoBehaviour
{
    public bool classroom_mode;
    public TextMeshProUGUI cedula_text;
    public TextMeshProUGUI pass_text;
    public TextMeshProUGUI id_terapeuta_text;

    public TextMeshProUGUI warning_sign;

    public GameObject login_panel;
    public GameObject create_panel;
    public GameObject excercise_panel;
    public GameObject difficult_panel;
    public GameObject sync_panel;
    public GameObject warning_panel;

    public int gameType;

    public string difficultType;
    public GameManager manager;
    public GameObject medical_login;
    public GameObject _classroom_login;
    public Button situation1_button;
    // Start is called before the first frame update
    void Start()
    {
        if (classroom_mode)
        {
            _classroom_login.SetActive(true);
            medical_login.SetActive(false);
        }
        else
        {
            _classroom_login.SetActive(false);
            medical_login.SetActive(true);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void setPatientInformation()
    {
        //Con la información del formulario, agregue nuevo paciente.


    }
    public void SetGameInfo()
    {
        gameType = 0;
    }

    public void getPacientInformation()
    {
        string cedula = cedula_text.text;
        string pass = "";
        if (!string.IsNullOrEmpty(pass_text.text))
        {
            pass = "coronavirus";

        }
        Debug.Log(pass+"/"+ cedula);
        //string idterapeuta = id_terapeuta_text.text;
        //Se trae cédula
        GameManager.Instance._firstTime = true;
        if (pass!=null && cedula != null)
        {
            if (!classroom_mode)
            {
                Debug.Log("si" + pass + "/" + cedula);
                login_panel.SetActive(false);
                excercise_panel.SetActive(true);
            }
            else
            {
                login_panel.SetActive(false);
                situation1_button.onClick.Invoke();
            }
        }
    }

    public void CambiarJuego()
    {

    }
    public void ShowCreationPanel()
    {
        //warning_panel.SetActive(true);
        create_panel.SetActive(true);
        login_panel.SetActive(false);
    }

public void SetText(int case_num)
    {
        switch (case_num)
        {
            default:
            case 0:
                warning_sign.text = "Usuario creado correctamente";
                break;
            case 1:
                warning_sign.text = "Usuario no encontrado";
                break;
            case 2:
                warning_sign.text = "Contraseña vacía o incorrecta";
                break;
            case 3:
                warning_sign.text = "Identificación vacía o incorrecta";
                break;

        }
    }
    public void ShowOtherLevel()
    {

    }
    public void FinishGame()
    {
        Application.OpenURL("http://127.0.0.1:8050/");
        Application.Quit();
    }
    public void ChangeScene(int number)
    {
        SceneManager.LoadScene(number);
    }
}
