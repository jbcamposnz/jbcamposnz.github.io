//--------------------------------------------------- Test Emocional
document.getElementById('emotional-test').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const energia = form.energia.value;
  const ansiedad = form.ansiedad.value;
  const estado = form.estado.value;
  const sueño = form.sueño.value;
  const apoyo = form.apoyo.value;

  if (!energia || !ansiedad || !estado || !sueño || !apoyo) {
    document.getElementById('resultado-test').innerHTML = `<p style="color:red;">Por favor, responde todas las preguntas antes de continuar.</p>`;
    return;
  }

  let perfil = '';
  let sugerencia = '';

  if (estado === 'feliz' && energia === 'alta' && ansiedad === 'nada') {
    perfil = '🌞 Estado positivo';
    sugerencia = '¡Sigue cultivando tu bienestar! Puedes explorar nuevas metas o ayudar a otros.';
  } else if (estado === 'triste' || ansiedad === 'intensa' || sueño === 'no') {
    perfil = '🌧️ Estado vulnerable';
    sugerencia = 'Parece que estás atravesando un momento difícil. Te recomiendo hacer una pausa, respirar profundo y hablar con alguien de confianza.';
    activarChatbot();
  } else if (estado === 'irritado' || apoyo === 'no') {
    perfil = '🔥 Estado emocional alterado';
    sugerencia = 'Tu sistema emocional está sobrecargado. Intenta escribir lo que sientes o hacer una caminata breve para liberar tensión.';
    activarChatbot();
  } else {
    perfil = '🌤️ Estado intermedio';
    sugerencia = 'Tu estado emocional es estable, pero puedes beneficiarte de actividades relajantes como meditación o lectura tranquila.';
  }

  document.getElementById('resultado-test').innerHTML = `
    <h3>Tu perfil emocional: ${perfil}</h3>
    <p>${sugerencia}</p>
  `;
});

document.getElementById('reset-test').addEventListener('click', () => {
  document.getElementById('emotional-test').reset();
  document.getElementById('resultado-test').innerHTML = '';
});

function activarChatbot() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.classList.add('expanded');
}

