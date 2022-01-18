const req = document.querySelectorAll("input");
const form = document.querySelector("form");
const span = document.querySelectorAll("input + span");
const emailError = document.querySelector("#email + span");
const email = document.querySelector("#email");
const btn = document.querySelector("button");

for (let i = 0; i < req.length; i++) {
  req[i].addEventListener("input", (e) => {
    if (req[i].validity.valueMissing) {
      span[i].textContent = `${req[i].placeholder} cannot be empty`;
      req[i].setAttribute("class", "touched");
    } else if (req[i].type === "email" && email.validity.patternMismatch) {
      emailError.textContent = "Looks like this is not an email";
      req[i].setAttribute("class", "touched");
    } else {
      span[i].textContent = "";
    }
  });
}

form.addEventListener("submit", (e) => {
  for (let i = 0; i < req.length; i++) {
    if (req[i].validity.valueMissing) {
      req[i].setAttribute("class", "touched");
      span[i].textContent = `${req[i].placeholder} cannot be empty`;
      e.preventDefault();
    } else {
      if (email.validity.patternMismatch) {
        req[i].setAttribute("class", "touched");
        emailError.textContent = "Looks like this is not an email";
        e.preventDefault();
      } else {
        span[i].textContent = "";
      }
    }
  }
  btn.blur();
});
