function mostrariesgos() {
    const problema = document.getElementById("problema").value;
    const medicamentos = {
      dependencia: "Dosis incorrectas, vía de administración errónea o duración inadecuada del tratamiento. La dependencia a medicamentos ocurre cuando el cuerpo y la mente desarrollan una necesidad por un fármaco que no puede controlar, llevándolo a buscar y consumir la sustancia de forma compulsiva, incluso más allá de las dosis prescritas ",
      toxicidad: "Efectos secundarios, reacciones adversas y, en algún caso, intoxicación. La toxicidad por sobredosis de un fármaco se refiere a las reacciones tóxicas graves, habitualmente nocivas y en ocasiones mortales, debidas a una sobredosis accidental (por un error por parte del médico, el farmacéutico o la persona que se toma el fármaco) o intencionada (homicida o suicida) ",
      reacciones: "Pueden presentarse reacciones alérgicas, interacciones peligrosas con otros medicamentos que se estén tomando o efectos no deseados propios del fármaco. ",
      resistencia: "En el caso de los antibióticos, la automedicación puede contribuir a la resistencia bacteriana, haciendo que los tratamientos futuros sean menos efectivos. "
      
    };
    document.getElementById("medicamentos").innerText = medicamentos[problema] || "";
  }
  function mostrarAyuda() {
    const tematica = document.getElementById("tematica").value;
    const ayuda = {
      ansiedad: "La ansiedad puede manejarse con técnicas de respiración, meditación y apoyo psicológico.",
      depresion: "La depresión requiere acompañamiento profesional, actividad física y expresión emocional.",
      estres: "El estrés puede reducirse con organización, descanso adecuado y ejercicios de relajación.",
      autoestima: "Trabaja en tu autoestima reconociendo tus logros y rodeándote de personas que te valoren."
    };
    document.getElementById("ayuda").innerText = ayuda[tematica] || "";
   
    const imagenes = {
      ansiedad: [
        "ansiedad1.jpg",
        "ansiedad2.jpg",
        "ansiedad3.jpg"
      ],
      depresion: [
        "depresion1.jpg",
        "depresion2.jpg",
        "depresion3.jpg"
      ],
      estres: [
        "estres1.jpg",
        "estres2.jpg",
        "estres3.jpg"
      ],
      autoestima: [
        "autoestima1.jpg",
        "autoestima2.jpg",
        "autoestima3.jpg"
      ]
    };
  
    const galeria = document.getElementById("imagenes");
    galeria.innerHTML = "";
  
    if (imagenes[tematica]) {
      imagenes[tematica].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = tematica;
        galeria.appendChild(img);
      });
    }
  }

  
//****************************** */ Codigo Chat
  document.getElementById('toggle-chat').addEventListener('click', () => {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.classList.toggle('hidden');
});



const toggleButton = document.getElementById('toggle-chat');
const chatWindow = document.getElementById('chat-window');

toggleButton.addEventListener('click', () => {
  chatWindow.classList.toggle('expanded');
});


document.getElementById('chat-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const input = e.target.value.trim();
    if (input) {
      addMessage('Tú', input);
      respondToUser(input);
      e.target.value = '';
    }
  }
});

function addMessage(sender, text) {
  const chatBody = document.getElementById('chat-body');
  const message = document.createElement('div');
  message.classList.add('message');
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  message.innerHTML = `<strong>${sender}:</strong> ${text}<div class="timestamp">${time}</div>`;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function respondToUser(input) {
  let response = "Estoy aquí para escucharte. Cuéntame más.";
  const lower = input.toLowerCase();

  if (lower.includes("ansiedad") || lower.includes("ansioso")) {
    response = "La ansiedad puede ser abrumadora. ¿Te gustaría hacer un ejercicio de respiración guiada?";
  } else if (lower.includes("triste") || lower.includes("deprimido")) {
    response = "Lamento que te sientas así. Recuerda que no estás solo. ¿Quieres hablar sobre lo que te entristece?";
  } else if (lower.includes("feliz") || lower.includes("bien")) {
    response = "¡Me alegra mucho saberlo! ¿Qué te hizo sentir bien hoy?";
  }

  setTimeout(() => addMessage('Bot', response), 600);
}
// Detectar tecla Enter en el campo de entrada
document.getElementById("entrada").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Evita que se envíe el formulario por defecto
    enviarMensaje();    // Llama a la función que envía el mensaje
  }
});
document.getElementById("toggleChat").addEventListener("click", function () {
  const chat = document.getElementById("chatbot");
  chat.style.display = chat.style.display === "none" ? "block" : "none";
});



