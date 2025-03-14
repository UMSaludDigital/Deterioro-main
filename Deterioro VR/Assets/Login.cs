using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class Login : MonoBehaviour
{
    [Serializable]
    public class Gamer
    {
        public int userId;
        public string userName;
        public int score;
    }

    public void PostData()
    {
        int userIDFromInput = 32;//Int32.Parse(userID.text);
        string userNameFromInput = "hey";//userName.text;
        int scoreFromInput = 31;//Int32.Parse(score.text);

        Gamer gamer = new Gamer();
        gamer.userId = userIDFromInput;
        gamer.userName = userNameFromInput;
        gamer.score = scoreFromInput;

        string json = JsonUtility.ToJson(gamer);
        StartCoroutine(PostRequest("http://127.0.0.1:5000/list_add", json));
    }
    IEnumerator PostRequest(string url, string json)
    {
        var uwr = new UnityWebRequest(url, "POST");
        byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);
        uwr.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend);
        uwr.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
        uwr.SetRequestHeader("Content-Type", "application/json");

        //Send the request then wait here until it returns
        yield return uwr.SendWebRequest();

        if (uwr.isNetworkError)
        {
            Debug.Log("Error While Sending: " + uwr.error);
        }
        else
        {
            Debug.Log("Received: " + uwr.downloadHandler.text);
        }
    }
}
