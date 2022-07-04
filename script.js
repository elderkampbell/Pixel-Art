const preto = document.getElementById(black);
const vermelho = document.getElementById(red);
const verde = document.getElementById(green);
const azul = document.getElementById(blue);

let corSelecionada = 'cor';

black.addEventListener('click', function () {
  corSelecionada = 'black';
  console.log (corSelecionada)
});

red.addEventListener('click', function () {
  corSelecionada = 'red';
  console.log (corSelecionada)
});

green.addEventListener('click', function () {
  corSelecionada = 'green';
  console.log (corSelecionada)
});

blue.addEventListener('click', function () {
  corSelecionada = 'blue';
  console.log (corSelecionada)
});