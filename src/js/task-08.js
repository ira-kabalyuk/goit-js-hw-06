const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {  
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;  

  event.preventDefault();
  
  if (email === '' || password === '') {
    alert('все поля должны быть заполнены')
  }

  else {
    const UserValue = {
      email,
      password,
    }   
    console.log(UserValue);
    form.reset()
  }  
}