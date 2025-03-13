using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR;
using UnityEngine.XR.Interaction.Toolkit;

public class ValidatePosition : MonoBehaviour
{
    public Material WrongTexture;

    public Material RightTexture;

    public Material DefaultTexture;
    //-1 vacio 
    //0 incorrecto 
    //1 correcto 
    //2 incorrecto, pero en otra posición
    public int status = -1;

    public GameObject _objectoRecordar;
    public GameObject _objetoActual;
    public ScriptScenario scenarioManager;
    public GameObject referencePosition;
    public List<GameObject> Memoria;
    public bool canCount;
    public MemoryManager memory_manager;
    // Start is called before the first frame update
    void Start()
    {
        
    }
   public IEnumerator showForAmoment(GameObject copyObject)
    {
        yield return new WaitForSeconds(10);
        copyObject.SetActive(false);
        
        if (memory_manager!=null)
        {
            memory_manager.canCount = true;
            memory_manager.startime = Time.time;
        }

    }
    public void ShowObject(int pos)
    {
        GameObject copyObject = Memoria[pos];
        if (copyObject.name=="default")
        {
            copyObject.transform.parent.gameObject.SetActive(true);
        }
        if (copyObject.GetComponent<XRGrabInteractable>() != null)
        {
            copyObject.GetComponent<XRGrabInteractable>().enabled = false;
        }
       
        if (copyObject.name.Contains("uploads_files_1879800_candle_stand"))
        {

            copyObject.transform.GetChild(3).GetComponent<Rigidbody>().useGravity = true;

            copyObject.transform.GetChild(3).GetComponent<Rigidbody>().isKinematic = true;
        }
        if(copyObject.name.Contains("DCR_Clock0002_CDesk_LOD"))
        {
            copyObject.transform.GetChild(0).GetComponent<Rigidbody>().useGravity = true;

            copyObject.transform.GetChild(0).GetComponent<Rigidbody>().isKinematic = true;

        }
        else
        {
            if (copyObject.GetComponent<Rigidbody>() != null)
            {
                copyObject.GetComponent<Rigidbody>().useGravity = true;
                copyObject.GetComponent<Rigidbody>().isKinematic = true;
            }
            else { Debug.Log("nombre del objeto que no coincide con nada "+copyObject.name); }
        }
        copyObject.SetActive(true);
        //copyObject.transform.position = referencePosition.transform.position;
        StartCoroutine(showForAmoment(copyObject));

    }
    // Update is called once per frame
    void Update()
    {
        
    }
    private void OnTriggerEnter (Collider other)
    {
        if (_objectoRecordar != null)

        {
            if (other.gameObject.layer == 6)
            {

                _objetoActual = other.gameObject;
                Debug.Log("Entro " + other.gameObject.name + " El objeto a recordar es " + _objectoRecordar.name);
                if (_objetoActual.name == _objectoRecordar.name)
                {
                    status = 1;
                    Debug.Log("Correcto");
                }

                else
                {

                    Debug.Log("Incorrecto Entro " + other.gameObject.name + " El objeto a recordar es " + _objectoRecordar.name +" CUBE NUMBER = " +this.gameObject.name);
                    status = 0;
                }
            }
        }
    }

    private void OnTriggerExit(Collider collision)
    {

        Debug.Log("Sali " + collision.gameObject.name);
        if (collision.gameObject.layer == 6)
        {
            Debug.Log("Hubiese Salido de no comentar el código " + collision.gameObject.name);
            //_objetoActual = null;
            //status = -1;

        }

    }
}
