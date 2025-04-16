let apostaCount = 0;

function fazerAposta() {
  const input = document.getElementById('horario');
  const valor = input.value;
  const feedback = document.getElementById('feedback');
  const apostas = document.getElementById('apostas');

  const agora = new Date();
  const horaAtual = agora.getHours();
  const minutoAtual = agora.getMinutes();

  feedback.className = ''; // Reset feedback style

  if (!valor) {
    mostrarFeedback('⛔ Digite um horário válido!', 'error');
    return;
  }

  if (apostaCount >= 2) {
    mostrarFeedback('⚠️ Você só pode apostar no máximo 2 vezes!', 'error');
    return;
  }

  const [hora, minuto] = valor.split(':').map(Number);

  if (hora < horaAtual || (hora === horaAtual && minuto <= minutoAtual)) {
    mostrarFeedback('⛔ Esse horário não pode, pois já passou!', 'error');
    return;
  }

  apostaCount++;
  mostrarFeedback('✅ Aposta registrada com sucesso!', 'success');

  const apostaCard = document.createElement('div');
  apostaCard.className = 'aposta-card';
  apostaCard.textContent = `Aposta ${apostaCount}: ${valor}`;
  apostas.appendChild(apostaCard);
}

function mostrarFeedback(mensagem, tipo) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = mensagem;
  feedback.className = tipo === 'success' ? 'success' : 'error';
  feedback.classList.add('feedback');
  feedback.style.display = 'block';
}
