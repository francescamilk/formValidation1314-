const inputs = document.querySelectorAll('input');
const button = document.getElementById('submit');

const nameValidator = (input) => {
    if (input.value !== "") {
        input.classList.add('border-success');
    } else {
        input.classList.add('border-danger');
        input.classList.remove('border-success');
        input.insertAdjacentHTML('afterend', '<p class="text-danger">Name should have at least 2 characters.</p>')
    }
};

const generalChecker = (inputs) => {
    // set a counter for passed validations to 0
    let passedCounter = 0;

    // iterate over inputs
        // check if the tag contains a class 'border-success'
        // => increment the counter
    inputs.forEach((input) => {
        if (input.classList.contains('border-success')) {
            passedCounter += 1;
        }
    });

    // compare the counter to the amount of inputs in the Array
        // => if same, enable the button
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
        nameValidator(input);
        generalChecker(inputs);
    });
});