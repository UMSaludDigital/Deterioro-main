using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Excersice2Manager : MonoBehaviour
{
    public GameObject torusFront;
    public GameObject torusAbove;
    public collider_torus_manager above_manager;
    public collider_torus_manager front_manager;

    public GameObject canvas_instrucctions;

    public GameObject canvas_felicitacion;
    public bool canCount;
    public TextMeshProUGUI secondClock;
    public int min;
    public int sec;
    public int fraction;
    public float timecount;
    public float startime;

    public object SceneManagment { get; private set; }

    // Start is called before the first frame update
    void Start()
    {
        front_manager.SetHand("Right");

        above_manager.SetHand("Left");
        StartCoroutine(canvas_turnoff());
    }
    public IEnumerator canvas_turnoff()
    {
        yield return new WaitForSeconds(10);
        canvas_instrucctions.SetActive(false);
        torusAbove.SetActive(true);
        torusFront.SetActive(true);
        canCount = true;
        startime = Time.time;

    }
    public void setTime()
    {
        timecount = Time.time - startime;
        min = (int)(timecount / 60f);
        sec = (int)(timecount % 60f);
        fraction = (int)((timecount * 10) % 10);
        secondClock.text = string.Format("{0:00}:{1:00}", min, sec);
    }
    IEnumerator waitForSeconds(int sec)
    {
        yield return new WaitForSeconds(4);

        SceneManager.LoadScene(4);
    }
    // Update is called once per frame
    void Update()
    {
        if (canCount)
        {
            setTime();
        }
        if (above_manager.laps>=3 && front_manager.laps>=3)
        {
            canvas_felicitacion.SetActive(true);
            canCount = false;
            StartCoroutine(waitForSeconds(4));
        }
    }
}
