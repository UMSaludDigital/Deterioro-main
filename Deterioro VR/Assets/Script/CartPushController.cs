/*
 * using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

[RequireComponent(typeof(Rigidbody))]
[RequireComponent(typeof(XRGrabInteractable))]
public class CartPushController : MonoBehaviour
{
    // Referencia al Rigidbody del carrito.
    private Rigidbody rb;

    // Componente que permite la interacción (grab) con el carrito.
    private XRGrabInteractable grabInteractable;

    // Referencia al interactor (por ejemplo, el controlador) que está interactuando actualmente.
    private XRBaseInteractor interactor;

    // Guarda la posición anterior del interactor para calcular el delta de movimiento.
    private Vector3 previousInteractorPosition;

    // Factor multiplicador para la fuerza de empuje.
    [Tooltip("Ajusta la intensidad del empuje aplicado al carrito.")]
    public float pushForceMultiplier = 10f;

    private void Awake()
    {
        rb = GetComponent<Rigidbody>();
        grabInteractable = GetComponent<XRGrabInteractable>();

        // Suscribirse a los eventos de selección del interactable.
        if (grabInteractable != null)
        {
            grabInteractable.selectEntered.AddListener(OnSelectEnter);
            grabInteractable.selectExited.AddListener(OnSelectExit);
        }
    }

    private void OnDestroy()
    {
        // Es importante desuscribir los eventos al destruir el objeto.
        if (grabInteractable != null)
        {
            grabInteractable.selectEntered.RemoveListener(OnSelectEnter);
            grabInteractable.selectExited.RemoveListener(OnSelectExit);
        }
    }

    /// <summary>
    /// Se invoca cuando el usuario comienza a agarrar el carrito.
    /// </summary>
    /// <param name="args">Argumentos del evento que contienen el interactor.</param>
    private void OnSelectEnter(SelectEnterEventArgs args)
    {
        // Se obtiene el interactor (el controlador que realiza el agarre).
        interactor = (XRBaseInteractor)args.interactorObject;
        // Guardamos la posición inicial del interactor.
        previousInteractorPosition = interactor.transform.position;
    }

    /// <summary>
    /// Se invoca cuando el usuario suelta el carrito.
    /// </summary>
    /// <param name="args">Argumentos del evento.</param>
    private void OnSelectExit(SelectExitEventArgs args)
    {
        interactor = null;
    }

    /// <summary>
    /// En FixedUpdate, calculamos el desplazamiento del interactor y aplicamos una fuerza al carrito.
    /// Usamos FixedUpdate para trabajar en sincronía con la simulación física.
    /// </summary>
    private void FixedUpdate()
    {
        if (interactor != null)
        {
            // Obtener la posición actual del controlador.
            Vector3 currentPosition = interactor.transform.position;
            // Calcular la diferencia respecto a la posición del frame anterior.
            Vector3 deltaMovement = currentPosition - previousInteractorPosition;
            Debug.Log("a" +currentPosition); Debug.Log("b"+deltaMovement); Debug.Log("c"+ForceMode.VelocityChange);
            // Aplicar la fuerza al Rigidbody en función del desplazamiento del controlador.
            // Se usa ForceMode.VelocityChange para una respuesta inmediata.
            rb.AddForce(deltaMovement * pushForceMultiplier, ForceMode.VelocityChange);

            // Actualizamos la posición para el siguiente cálculo.
            previousInteractorPosition = currentPosition;
        }
    }
}
*/

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

[RequireComponent(typeof(Rigidbody))]
[RequireComponent(typeof(XRGrabInteractable))]
public class CartPushController : MonoBehaviour
{
    private Rigidbody rb;
    private XRGrabInteractable grabInteractable;
    private XRBaseInteractor interactor;
    private Vector3 previousInteractorPosition;

    [Tooltip("Multiplicador para la fuerza de empuje aplicada al carrito.")]
    public float pushForceMultiplier = 10f;

    [Tooltip("Distancia mínima que debe mantenerse entre la cámara y el carrito.")]
    public float minDistanceFromCamera = 1.5f;

    // Referencia a la cámara principal (asumida como la cámara VR)
    private Transform cameraTransform;

    private void Awake()
    {
        rb = GetComponent<Rigidbody>();
        grabInteractable = GetComponent<XRGrabInteractable>();

        if (grabInteractable != null)
        {
            grabInteractable.selectEntered.AddListener(OnSelectEnter);
            grabInteractable.selectExited.AddListener(OnSelectExit);
        }
    }

    private void Start()
    {
        // Se obtiene la cámara principal, que debe estar asignada correctamente al tag "MainCamera"
        if (Camera.main != null)
        {
            cameraTransform = Camera.main.transform;
        }
        else
        {
            Debug.LogWarning("No se encontró la cámara principal. Asegúrate de que la cámara tenga el tag 'MainCamera'.");
        }
    }

    private void OnDestroy()
    {
        if (grabInteractable != null)
        {
            grabInteractable.selectEntered.RemoveListener(OnSelectEnter);
            grabInteractable.selectExited.RemoveListener(OnSelectExit);
        }
    }

    private void OnSelectEnter(SelectEnterEventArgs args)
    {
        interactor = args.interactor;
        previousInteractorPosition = interactor.transform.position;
    }

    private void OnSelectExit(SelectExitEventArgs args)
    {
        interactor = null;
    }

    private void FixedUpdate()
    {
        if (interactor != null)
        {
            Vector3 currentPosition = interactor.transform.position;
            Vector3 deltaMovement = currentPosition - previousInteractorPosition;

            // Calcular la fuerza potencial a aplicar
            Vector3 intendedForce = deltaMovement * pushForceMultiplier;

            // Suponiendo un delta de tiempo en FixedUpdate
            Vector3 potentialNewPosition = rb.position + intendedForce * Time.fixedDeltaTime;

            // Si se cuenta con la cámara, se evalúa la distancia
            if (cameraTransform != null)
            {
                float distanceAfterForce = Vector3.Distance(potentialNewPosition, cameraTransform.position);

                // Si el carrito estaría demasiado cerca, ajustar la fuerza
                if (distanceAfterForce < minDistanceFromCamera)
                {
                    // Calcula el vector que une la cámara con el carrito
                    Vector3 fromCameraToCart = (rb.position - cameraTransform.position).normalized;

                    // Determina la componente de la fuerza que impulsa al carrito en la dirección contraria a la cámara
                    float forceComponent = Vector3.Dot(intendedForce, fromCameraToCart);

                    // Si la fuerza aplicada lo acerca a la cámara (componente negativa o insuficiente), se ajusta:
                    if (forceComponent < 0)
                    {
                        // Se proyeca la fuerza solo en la dirección que aleje el carrito de la cámara.
                        Vector3 adjustedForce = Vector3.Project(intendedForce, fromCameraToCart);
                        rb.AddForce(adjustedForce, ForceMode.VelocityChange);
                    }
                    else
                    {
                        // Si la fuerza no reduce la distancia a la cámara, se aplica normalmente.
                        rb.AddForce(intendedForce, ForceMode.VelocityChange);
                    }
                }
                else
                {
                    // Si la distancia resultante es segura, se aplica la fuerza completa.
                    rb.AddForce(intendedForce, ForceMode.VelocityChange);
                }
            }
            else
            {
                // Si no hay cámara asignada, se aplica la fuerza sin restricciones.
                rb.AddForce(intendedForce, ForceMode.VelocityChange);
            }

            previousInteractorPosition = currentPosition;
        }
    }
}
