const form = document.getElementById('meuFormulario');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const valorA = Number(document.getElementById('campoA').value);
  const valorB = Number(document.getElementById('campoB').value);

  if (valorB > valorA) {
    mensagem.textContent = 'Formulário válido! O número B é maior que o número A.';
    mensagem.className = 'positivo';
  } else {
    mensagem.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
    mensagem.className = 'negativo';
  }
});
