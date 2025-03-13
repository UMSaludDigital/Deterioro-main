using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ResetScene : MonoBehaviour
{

    // Start is called before the first frame update
    void Start()
    {
        
    }
    public void Restart()
    {
        Debug.Log("Al menos hice click");
        SceneManager.LoadScene(1);
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
