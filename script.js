const eyeIcon = document.querySelector(".fa-regular");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const toggleIcon = () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else if (passwordInput.type === "text") {
    passwordInput.type = "password";
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
  }
};

const login = () => {
  if (!emailInput.value) {
    emailError.innerText = "Email is required!";
    return;
  } else {
    emailError.innerText = "";
  }

  if (!passwordInput.value) {
    passwordError.innerText = "Password is required!";
    return;
  } else {
    passwordError.innerText = "";
  }

  //login success
};
