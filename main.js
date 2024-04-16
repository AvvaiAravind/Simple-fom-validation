const form = document.getElementById("form");
const inputGroup = document.getElementById("Form__input");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfmpassword = document.getElementById("cnfmpassword");

form.addEventListener("submit", (evnt) => {
  if (!validateInput()) {
    evnt.preventDefault();
  }
});

const validateInput = () => {
  const usernameValue = username.value;
  let success = true;

  if (usernameValue === "") {
    success = false;
    setError(username, "username is necessary");
  } else {
    setSucess(username);
  }

  const emailValue = email.value;

  if (emailValue === "") {
    success = false;
    setError(email, "email is requiered");
  } else if (!validateEmail(emailValue)) {
    success = false;
    setError(email, "Enter a valid email");
  } else {
    setSucess(email);
  }

  const passwordValue = password.value;

  if (passwordValue === "") {
    success = false;
    setError(password, "Password is necessary");
  } else if (passwordValue.length < 8) {
    success = false;
    setError(password, "Password should be minimum 8 character");
  } else {
    setSucess(password);
  }

  const cnfmpasswordValue = cnfmpassword.value;

  if (cnfmpasswordValue === "") {
    success = false;
    setError(cnfmpassword, "Password is necessary");
  } else if (cnfmpasswordValue !== passwordValue) {
    success = false;
    setError(cnfmpassword, "password should match");
  } else {
    setSucess(cnfmpassword);
  }
  return success;
};

const setError = (element, errMsg) => {
  const parent = element.parentElement;
  const errorElement = parent.querySelector(".error");
  errorElement.textContent = errMsg;
  parent.classList.add("error");
  parent.classList.remove("sucess");
};

const setSucess = (element) => {
  const parent = element.parentElement;
  const errorElement = parent.querySelector(".error");
  errorElement.textContent = "";

  parent.classList.add("sucess");
  parent.classList.remove("error");
};

function validateEmail(email) {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
}
