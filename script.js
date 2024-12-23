const inputs = document.querySelectorAll('input');
const form = document.querySelector('#accountForm');
const phoneInput = document.querySelector('#phone');
const confPassInput = document.querySelector('#confPass');
const passInput = document.querySelector('#password');

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        input.classList.add("touched");
    });
});


phoneInput.addEventListener("input", () => {
    const pattern = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
    if (!pattern.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Please enter a valid phone number.");
    } else {
        phoneInput.setCustomValidity("");
    }
});

confPassInput.addEventListener("input", () => {
    if (passInput.value !== confPassInput.value) {
        confPassInput.setCustomValidity("Please make sure your passwords match!")
    } else {
        confPassInput.setCustomValidity("");
    }
})

form.addEventListener("submit", (e) => {
    let isValid = true;
    inputs.forEach((input) => {
        if (!input.checkValidity()){
            isValid = false;
            input.reportValidity();
    
        }
        if (!isValid) {
            e.preventDefault();
        } else {
            alert("Submission Successful!!");
            inputs.forEach((input) => {
                input.value = "";
            })
            window.location.reload();
        }

    })
    
});