using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class Opacidad : MonoBehaviour
{
    [SerializeField] private Image img;
    [SerializeField] private Color color;

    private void Start()
    {
        OpacidadUI("FadeOut");
    }

    public void OpacidadUI(string tipo)
    {
        if (tipo == "FadeIn")
        {
            StartCoroutine(FadeIn());
        }
        else if (tipo == "FadeOut")
        {
            StartCoroutine(FadeOut());
        }
        else if (tipo == "FadeInAndOut")
        {
            StartCoroutine(FadeInAndOut());
        }
        else if (tipo == "FadeOutAndIn")
        {
            StartCoroutine(FadeOutAndIn());
        }
    }
    IEnumerator FadeIn()
    {
        for (float i = 0; i <= 1; i += Time.deltaTime)
        {
            color.a = i;
            img.color = color;
            yield return null;
        }
    }
    IEnumerator FadeOut()
    {
        for (float i = 1; i >= 0; i -= Time.deltaTime)
        {
            color.a = i;
            img.color = color;
            yield return null;
        }
    }
    IEnumerator FadeInAndOut()
    {
        for (float i = 0; i <= 1; i += Time.deltaTime)
        {
            color.a = i;
            img.color = color;
            yield return null;
        }
        yield return new WaitForSeconds(1);
        for (float i = 1; i >= 0; i -= Time.deltaTime)
        {
            color.a = i;
            img.color = color;
            yield return null;
        }
    }
    IEnumerator FadeOutAndIn()
    {
        for (float i = 1; i >= 0; i -= Time.deltaTime)
        {
            color.a = i;
            img.color = color;
            yield return null;
        }
        yield return new WaitForSeconds(1);
        for (float i = 0; i <= 1; i += Time.deltaTime)
        {
            color.a = i;
            img.color = color;
            yield return null;
        }
    }
}