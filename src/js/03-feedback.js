import Throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const LOCAL_KEY = 'feedback-form-state';


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
