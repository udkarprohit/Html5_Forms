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
