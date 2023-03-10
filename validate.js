function validateFirstName() {
    const firstNameInput = document.getElementById("first-name");
    const firstName = firstNameInput.value;
    const regex = /^[A-Z][a-z]{2,}$/;
    const errorSpan = document.getElementById("first-name-error");
  
    if (regex.test(firstName)) {
      errorSpan.innerText = "";
      firstNameInput.setCustomValidity("");
    } else {
      errorSpan.innerText = "Please enter a valid first name";
      firstNameInput.setCustomValidity("Invalid first name");
    }
}
function validateEmailAddress() {
  const emailInput = document.getElementById("email-address");
  const email = emailInput.value;
  const regex = /^[a-z]{3,}[-_+.a-z0-9]*[@][0-1a-z]+[.][a-z]{2,}[.]?[,a-z]{0,3}$/;
  const errorSpan = document.getElementById("email-address-error");

  if (regex.test(email)) {
    errorSpan.innerText = "";
    emailInput.setCustomValidity("");
  } else {
    errorSpan.innerText = "Please enter a valid email";
    emailInput.setCustomValidity("Invalid Email Address");
  }
}

function validatePhoneNumber() {
  const phoneNumberInput = document.getElementById("phone-number");
  const phoneNumber = phoneNumberInput.value;
  const regex = /^91\s\d{10}$/;
  const errorSpan = document.getElementById("phone-number-error");

  if (regex.test(phoneNumber)) {
    errorSpan.innerText = "";
    emailInput.setCustomValidity("");
  } else {
    errorSpan.innerText = "Please enter a valid phone Number";
    emailInput.setCustomValidity("Invalid Phone Number");
  }
}

function validatePassword() {
  const phoneNumberInput = document.getElementById("password");
  const phoneNumber = phoneNumberInput.value;
  const regex = /^[A-Z][a-z]{7,}[0-9]+[@#$%&]$/;
  const errorSpan = document.getElementById("password-error");

  if (regex.test(phoneNumber)) {
    errorSpan.innerText = "";
    emailInput.setCustomValidity("");
  } else {
    errorSpan.innerText = "Please enter a valid Password";
    emailInput.setCustomValidity("Invalid Password");
  }
}