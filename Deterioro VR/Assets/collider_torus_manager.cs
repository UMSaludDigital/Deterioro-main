using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class collider_torus_manager : MonoBehaviour
{
    public List<colliderTorus> torus_colliders;
    public int laps;
    // Start is called before the first frame update
    void Start()
    {
        laps = 0;
    }
    public void SetHand(string hand)
    {
        torus_colliders.ForEach(x => x.hand_expected = hand);
    }
    // Update is called once per frame
    void Update()
    {
        if (torus_colliders.All(x=>x.visited))
        {
            
                laps++;
                torus_colliders.ForEach(x => x.visited = false);
                torus_colliders.ForEach(x => x.hand_visited = "");

        }
    }
}
