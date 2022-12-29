export function validateRequired(inputControl, errorDiv, inputType) {
  let expectedValue, inputValue;

  const formValidationStatus = document.getElementById(
    "form-validation-status"
  );

  switch (inputType) {
    case "text":
      expectedValue = "";
      inputValue = inputControl.value.trim();
      break;

    case "select":
      expectedValue = "dummy";
      inputValue = inputControl.value.trim();
      break;

    case "radio":
      inputValue = inputControl.querySelector("input[name='passport']:checked");
      expectedValue = null;

      break;

    default:
      break;
  }

  if (inputValue === expectedValue) {
    errorDiv.innerText = "Required";
    errorDiv.style.display = "block";
    inputControl.style.outline = "1px orangered solid";
    if (inputType === "radio") {
      inputControl.style.outlineOffset = "5px";
    }

    formValidationStatus.value = false;
  } else {
    errorDiv.style.display = "none";
    inputControl.style.outline = "none";
  }
}
