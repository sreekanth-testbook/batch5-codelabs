import countries from "./countries.js";
import { validateRequired } from "./util/validate.js";

const countryDropdown = document.getElementById("country");
const countryErrorDiv = document.getElementById("country-error");

const signUpButton = document.getElementById("sign-up");

const usernameTextBox = document.getElementById("username");
const usernameErrorDiv = document.getElementById("username-error");

const passwordTextBox = document.getElementById("password");
const passwordErrorDiv = document.getElementById("password-error");

const confirmPasswordTextBox = document.getElementById("confirm-password");
const confirmPasswordErrorDiv = document.getElementById(
  "confirm-password-error"
);

const fullNameTextBox = document.getElementById("fullname");
const fullNameErrorDiv = document.getElementById("fullname-error");

const addresTextArea = document.getElementById("address");
const addressErrorDiv = document.getElementById("address-error");

const favColorTextBox = document.getElementById("fav-color");

const passportDiv = document.getElementById("passport-div");
const passportErrorDiv = document.getElementById("passport-error");

const formErrorDiv = document.getElementById("form-error-div");

const formValidationStatus = document.getElementById("form-validation-status");

populateCountries();

function populateCountries() {
  for (let index = 0; index < countries.length; index++) {
    const country = countries[index];

    const option = document.createElement("option");
    option.value = country;
    option.innerText = country;

    countryDropdown.append(option);
  }
}

signUpButton.addEventListener("click", () => {
  formValidationStatus.value = true;

  validateRequired(usernameTextBox, usernameErrorDiv, "text");
  validateRequired(passwordTextBox, passwordErrorDiv, "text");
  validateRequired(confirmPasswordTextBox, confirmPasswordErrorDiv, "text");
  validateRequired(fullNameTextBox, fullNameErrorDiv, "text");

  validateRequired(countryDropdown, countryErrorDiv, "select");
  validateRequired(addresTextArea, addressErrorDiv, "text");

  if (passwordTextBox.value.trim() !== confirmPasswordTextBox.value.trim()) {
    formErrorDiv.innerText = "Password and Confirm password do not match!";
    formErrorDiv.style.display = "block";

    formValidationStatus.value = false;
  } else {
    formErrorDiv.innerText = "";
    formErrorDiv.style.display = "none";
  }

  validateRequired(passportDiv, passportErrorDiv, "radio");

  console.log(formValidationStatus.value);

  if (formValidationStatus.value === "true") {
    const formValues = {
      username: usernameTextBox.value.trim(),
      password: passwordTextBox.value.trim(),
      country: countryDropdown.value.trim(),
      fullName: fullNameTextBox.value.trim(),
      favColor: favColorTextBox.value.trim(),
      hasPassport: passportDiv.querySelector("input[name='passport']:checked")
        ?.value,
      address: addresTextArea.value.trim(),
      monthlyNewsLetter: document.getElementById("send-newsletter").checked,
      acceptTnC: document.getElementById("accept_tnc").checked,
    };

    console.log("Submit values: ", formValues);
  }
});
