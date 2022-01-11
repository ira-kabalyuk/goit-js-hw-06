function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

let size = 20;

function createBoxes(amount) {
  amount = input.value;

  for (let i = 1; i <= amount; i += 1) {
    let newDiv = document.createElement('div');
    console.log(newDiv);
    newDiv.style.backgroundColor = getRandomHexColor();
    size += 10;
    newDiv.style.width = size + 'px';
    newDiv.style.height = size + 'px';
    box.append(newDiv);
  }
}

function destroyBoxes() {
  input.value = null;
  box.innerHTML = '';
 
}