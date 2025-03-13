using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Video;

public class PlayerController : MonoBehaviour
{
    public RawImage video;
    public MemoryManager memoryMan;
    public Desactivate_controls controls;
    // Start is called before the first frame update
    void Start()
    {

       // controls.activate_camera();
        //memoryMan.OrdenarEjecucion();
        this.GetComponent<VideoPlayer>().Play();
        StartCoroutine(WaitUntilFinish());
    }
    public IEnumerator WaitUntilFinish()
    {
        yield return new WaitForSeconds((float)this.GetComponent<VideoPlayer>().length);
        video.enabled = false;
        controls.activate_camera();
        memoryMan.OrdenarEjecucion();
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
