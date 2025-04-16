let apostaFeita = false;

function fazerAposta() {
  const nomeInput = document.getElementById('nome');
  const horarioInput = document.getElementById('horario');
  const valor = horarioInput.value;
  const nome = nomeInput.value.trim();
  const feedback = document.getElementById('feedback');
  const apostas = document.getElementById('apostas');

  const agora = new Date();
  const horaAtual = agora.getHours();
  const minutoAtual = agora.getMinutes();

  feedback.className = ''; // Reset feedback style

  // Verifica se o nome foi inserido
  if (!nome) {
    mostrarFeedback('⛔ Por favor, digite seu nome!', 'error');
    return;
  }

  // Verifica se o horário foi inserido
  if (!valor) {
    mostrarFeedback('⛔ Digite um horário válido!', 'error');
    return;
  }

  // Impede mais de uma aposta
  if (apostaFeita) {
    mostrarFeedback('⚠️ Você já fez uma aposta!', 'error');
    return;
  }

  // Verifica se o horário é válido (não pode ser no passado)
  const [hora, minuto] = valor.split(':').map(Number);
  if (hora < horaAtual || (hora === horaAtual && minuto <= minutoAtual)) {
    mostrarFeedback('⛔ Esse horário não pode, pois já passou!', 'error');
    return;
  }

  // Marca que a aposta foi feita
  apostaFeita = true;
  mostrarFeedback('✅ Aposta registrada com sucesso!', 'success');

  // Cria o card da aposta
  const apostaCard = document.createElement('div');
  apostaCard.className = 'aposta-card';
  apostaCard.textContent = `Aposta de ${nome}: ${valor}`;
  apostas.appendChild(apostaCard);
}

function mostrarFeedback(mensagem, tipo) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = mensagem;
  feedback.className = tipo === 'success' ? 'success' : 'error';
  feedback.classList.add('feedback');
  feedback.style.display = 'block';
}
