// 1. Track the input event on the form, and each time write to local storage an object with the email and message fields, in which you save the current values of the form fields. Let the key for the storage be the "feedback-form-state" string.
// 2. When loading the page, check the state of the storage, and if it stores some data, use it to fill in the form fields. Otherwise, the fields must be empty.
// 3. When submitting the form, clear the storage and form fields, and also display the object with the email and message fields and their current values in the console.
// 4. Make sure that the storage is updated no more than once every 500 milliseconds. To do this, add to the project and use the lodash.throttle library.

import Throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', formSubmitData);
form.addEventListener('input', Throttle(formInputData, 500));

function formSubmitData(event) {
    event.preventDefault();
    const keyParsed = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;

    if (email === '' || message === '') {
        return alert ('Enter data in all rows');
    }

    console.log(keyParsed);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');  
}

function formInputData({ target }) {
    const formData = localStorage.getItem('feedback-form-state')
    ? JSON.parse(localStorage.getItem('feedback-form-state'))
    : {};

    formData[target.name] = target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));  
}

formSaveData();

function formSaveData() {
    const saveData = localStorage.getItem('feedback-form-state');
    console.log(saveData);

    if (saveData) {
        const data = JSON.parse(saveData);
        if (data.email) {
            form.elements.email.value = data.email;
        }
        if (data.message) {
            form.elements.message.value = data.message;
        }
    }
}
