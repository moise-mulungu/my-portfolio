const form = document.querySelector('form');
const email = document.getElementById('email');
const warning = document.getElementById('warning');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    warning.innerHTML = 'only lowecase characters allowed for email !';
    event.preventDefault();
  }
});