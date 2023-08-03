const inputs     = document.querySelectorAll('input');
const emailInput = document.getElementById('email');
const tosInput   = document.getElementById('tos');
const button     = document.getElementById('submit');

const inputValidator = (input) => {
    if (input === emailInput) {
        const regex   = /\S+@\S+\.\S+/;
        const isValid = regex.test(input.value);
        classAdder(input, isValid, 'Please write email in the right format.')
    } else if (input === tosInput) {
        classAdder(input, input.checked, 'Please accept terms & conditions.')
    } else {
        const isValid = (input.value !== "");
        classAdder(input, isValid, 'Please fill in the field.');
    };
};

const classAdder = (input, isValid, errorMsg) => {
    if (isValid) {
        input.classList.add('border-success');
        input.classList.remove('border-danger');
    } else {
        input.classList.add('border-danger');
        input.classList.remove('border-success');
        input.insertAdjacentHTML('afterend', `<p class="text-danger">${errorMsg}</p>`)
    };
};

const generalChecker = (inputs) => {
    let passedCounter = 0;
    
    inputs.forEach((input) => {
        if (input.classList.contains('border-success')) {
            passedCounter += 1;
        };
    });
    
    if (passedCounter === inputs.length) {
        button.disabled = false;
        button.innerText = 'Submit!';
    } else {
        button.disabled = true;
        button.innerText = 'Please fill all fields';
    };
};

const runLogic = (input, inputs) => {
    inputValidator(input);
    generalChecker(inputs);
};

inputs.forEach((input) => {
    input.addEventListener('blur', (e) => {
        runLogic(input, inputs);
    });
});

tosInput.addEventListener('change', (e) => {
    runLogic(tosInput, inputs);
});