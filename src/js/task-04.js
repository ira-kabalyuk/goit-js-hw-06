const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const value = document.querySelector('#value');

const decrementBtn = decrement.addEventListener('click', onSubtractNumber);
const incrementBtn = increment.addEventListener('click', onAddNumber);

let initalNumberValue = 0;

function onSubtractNumber() {
  initalNumberValue -= 1;
  value.textContent = initalNumberValue;
}

function onAddNumber() {
  initalNumberValue += 1;
  value.textContent = initalNumberValue;
}

