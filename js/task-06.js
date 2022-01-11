const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener("blur", onInputCheck);

function onInputCheck(event) {
  if (event.currentTarget.value.length === Number(dataLength)) {
    input.classList.add('valid');
  }

  else { input.classList.add('invalid');}
}