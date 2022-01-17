const req = document.querySelectorAll('input');
const form = document.querySelector('form');
const span = document.querySelectorAll('input + span');
const emailError = document.querySelector('#email + span');
const email = document.querySelector('#email');
const btn = document.querySelector('button');

for (let i = 0; i < req.length; i++) {
  req[i].addEventListener('input', (e) => {
    if (req[i].validity.valueMissing) {
      span[i].textContent = `${req[i].placeholder} cannot be empty`;
    } else if (req[i].type === 'email' && email.validity.patternMismatch) {
      emailError.textContent = 'Looks like this is not an email';
    } else {
      span[i].textContent = '';
    }
  });
}

form.addEventListener('submit', (e) => {
  for (let i = 0; i < req.length; i++) {
    if (req[i].validity.valueMissing) {
      console.log('error');
      span[i].textContent = `${req[i].placeholder} cannot be empty`;
      e.preventDefault();
      btn.blur();
    } else {
      if (email.validity.patternMismatch) {
        emailError.textContent = 'Looks like this is not an email';
        e.preventDefault();
        btn.blur();
      } else {
        span[i].textContent = '';
      }
    }
  }
});
