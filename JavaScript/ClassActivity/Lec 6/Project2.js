const form = document.getElementById("myForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // clear previous errors
  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  confirmError.innerText = "";

  let isValid = true;

  // Name validation
  if (username.value.trim() === "") {
    nameError.innerText = "Name is required";
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === "") {
    emailError.innerText = "Email is required";
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    emailError.innerText = "Invalid email format";
    isValid = false;
  }

  // Password validation
  if (password.value.trim() === "") {
    passwordError.innerText = "Password is required";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters";
    isValid = false;
  }

  // Confirm password validation
  if (confirmPassword.value.trim() === "") {
    confirmError.innerText = "Confirm password is required";
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    confirmError.innerText = "Passwords do not match";
    isValid = false;
  }
});