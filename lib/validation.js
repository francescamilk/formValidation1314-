const inputs     = document.querySelectorAll('input');
const emailInput = document.getElementById('email');
const tosInput   = document.getElementById('tos');
const button     = document.getElementById('submit');

const inputValidator = (input) => {
    if (input === emailInput) {
        const emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(input.value)) {
            input.classList.add('border-success');
        } else {
            input.classList.add('border-danger');
            input.classList.remove('border-success');
            input.insertAdjacentHTML('afterend', '<p class="text-danger">Email is not in the right format.</p>')    
        }
    } else if (input.value !== "") {
        input.classList.add('border-success');
    } else {
        input.classList.add('border-danger');
        input.classList.remove('border-success');
        input.insertAdjacentHTML('afterend', '<p class="text-danger">Name should have at least 2 characters.</p>')
    }
};

const generalChecker = (inputs) => {
    let passedCounter = 0;

    inputs.forEach((input) => {
        if (input.classList.contains('border-success')) {
            passedCounter += 1;
        }
    });

    if (passedCounter === inputs.length) {
        button.disabled = false;
        button.innerText = 'Submit!';
    } else {
        button.disabled = true;
        button.innerText = 'Please fill all fields';
    }
};

inputs.forEach((input) => {
    input.addEventListener('blur', (e) => {
        inputValidator(input);
        generalChecker(inputs);
    });
});
