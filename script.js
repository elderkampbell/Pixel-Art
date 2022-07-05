const preto = document.getElementsByClassName('black');
const vermelho = document.getElementsByClassName('red');
const verde = document.getElementsByClassName('green');
const azul = document.getElementsByClassName('blue');
const colorSelected = document.querySelectorAll('.color');

colorSelected[0].classList.add('selected')

function listener() {
    for (let i = 0; i < 4; i += 1) {
        colorSelected[i].addEventListener('click', changeClass)
    }
}

function changeClass(click) {
    for (let i = 0; i < 4; i += 1) {
        colorSelected[i].classList.remove('selected');
    }
    click.target.classList.add('selected');
} listener();

function pixelBoard() {
    let pixelBoard = document.getElementById('pixel-board');

    for (let i = 0; i < 25; i += 1) {
        let createdDiv = document.createElement('div');
        createdDiv.classList.add('pixel')
        pixelBoard.appendChild(createdDiv);

    };
} pixelBoard();

function paleta() {
    let currentColor = document.getElementsByClassName('color')
    currentColor[0].style.backgroundColor = 'black'
    currentColor[1].style.backgroundColor = 'red'
    currentColor[2].style.backgroundColor = 'green'
    currentColor[3].style.backgroundColor = 'blue'
} paleta();

function paint() {
    let div = document.querySelectorAll('.pixel');
    let bg = ['black']
    for (let i = 0; i < colorSelected.length; i += 1) {
        colorSelected[i].addEventListener('click', function () {
            bg = colorSelected[i].style.backgroundColor
        })
    }
    for (let i = 0; i < div.length; i += 1) {
        div[i].addEventListener('click', function(){
            div[i].style.backgroundColor = bg;
        });
    }
} paint();