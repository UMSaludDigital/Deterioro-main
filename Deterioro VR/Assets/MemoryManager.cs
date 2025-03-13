using System.Collections;
using System.Collections.Generic;
using System.Linq;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MemoryManager : MonoBehaviour
{

    public GameManager _instance;
    public List<ValidatePosition> _gameObjectsToMemorice= new List<ValidatePosition>();

    public List<GameObject> _allGameObjects;
    public int _listSize;
    public TextMeshProUGUI time;
    public int min;
    public int sec;
    public int fraction;
    public float timecount;
    public float startime;
    public bool canCount;
    public int intentos_int = 1;
    public TextMeshProUGUI intentos;
    public GameObject GoodAdvise;
    public GameObject BadAdvise;
    public GameObject FailAdvise;


    List<int> repeatedNumbers = new List<int>();

    // Start is called before the first frame update
    void Start()
    {
        _instance = FindObjectOfType<GameManager>();
        _listSize = 4;
        if (_instance != null)
        {
            int diff = _instance._dificultad;
            if (diff == 0)
            {
                _listSize = 4;
            }

            else if (diff == 1)
            {
                _listSize = 6;
            }
            else if (diff == 2)
            {
                _listSize = 8;
            }
        }
        startime = Time.time;
        //OrdenarEjecucion();

    }

    public void OrdenarEjecucion()
    {
        AssingObject();
    }


    public void AssingObject()
    {
        //Recorrer la lista de objetos que se memorizará
        for (int i=0; i<_listSize;i++)
        {
            //Se selecciona aleatorio para tomar objetos desde lista de todos los objetos
            System.Random rand = new System.Random();
            int number = rand.Next(0,_allGameObjects.Count);
            if (repeatedNumbers.Contains(number))
            {
                //Se hace un ciclo para que genere un nuevo aleatorio en caso que el número generado inicialmente, ya estuviese en la lista
                while (repeatedNumbers.Contains(number))
                {
                    number = rand.Next(0, _allGameObjects.Count);

                    //Debug.Log("numero dentro de ciclo " + number);
                }
            }
            //Se agrega número en lista de repetidos para que no llame objetos duplicados
            repeatedNumbers.Add(number);
            _gameObjectsToMemorice[i]._objectoRecordar = _allGameObjects[number];
            _gameObjectsToMemorice[i].ShowObject(number);
        }
    }
    public void ShowObjectsToMemorice()
    {
        for (int i = 0; i < repeatedNumbers.Count; i++)
        {
            _gameObjectsToMemorice[i].Memoria[repeatedNumbers[i]].SetActive(true);
        }
    }
    public void HideObjectsToMemorice()
    {
        for (int i = 0; i < repeatedNumbers.Count; i++)
        {
            _gameObjectsToMemorice[i].Memoria[repeatedNumbers[i]].SetActive(false);
        }
    }
    public void HideAllObjects()
    {
        _allGameObjects.ForEach(x => x.SetActive(false));
    }
    public void ShowAllObjects()
    {

        _allGameObjects.ForEach(x => x.SetActive(true));
    }

    public IEnumerator ShowMessage(GameObject objectToShow, bool exit = false)
    {
        objectToShow.SetActive(true);
        yield return new WaitForSeconds(5);
        objectToShow.SetActive(false);
        if (exit)
        {
            SceneManager.LoadScene(2);
        }
        else // Si no sale del escenario, volverá a mostrar objetos a recordar
        {
            HideAllObjects();
            ShowObjectsToMemorice();
            yield return new WaitForSeconds(10);
            ShowAllObjects();
            HideObjectsToMemorice();
            

        }
    }
    public void ValidarSituacion()
    {
        if (intentos_int < 3)
        {
            
            if (_gameObjectsToMemorice.Any(x => x.status == 0))
            {
                intentos_int++;
                intentos.text = intentos_int.ToString() + "/3";
                StartCoroutine(ShowMessage(BadAdvise));

                Debug.Log("Al menos entré al incorrecto");
            }
            else
            {
                if (_gameObjectsToMemorice.Count(x=>x._objectoRecordar!=null) != _gameObjectsToMemorice.Count(x=>x.status==1))
                {

                    intentos_int++;
                    intentos.text = intentos_int.ToString() + "/3";

                    StartCoroutine(ShowMessage(BadAdvise));

                    Debug.Log("Al menos entré al vacio");
                }
                else
                {
                    Debug.Log("Correcto");

                    StartCoroutine(ShowMessage(GoodAdvise, true));

                    Debug.Log("Al menos entré al correcto");

                }
            }

        }
        else
        {

            Debug.Log("Al menos entré al intentos+3");
            StartCoroutine(ShowMessage(FailAdvise, true));
        }

    }

    public void setTime()
    {
        timecount = Time.time - startime;
        min = (int)(timecount / 60f);
        sec = (int)(timecount % 60f);
        fraction = (int)((timecount * 10) % 10);
        time.text = string.Format("{0:00}:{1:00}", min, sec);
    }
    // Update is called once per frame
    void Update()
    {
        if (canCount)
        {
            setTime();
        }
    }
}
