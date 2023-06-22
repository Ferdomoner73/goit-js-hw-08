import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('input[name="email"]')
const textareaEl = formEl.querySelector('textarea[name="message"]');

const formInfo = {};

const handleFormInput = () => {

    formInfo.email = inputEl.value;
    formInfo.message = textareaEl.value;
    

    localStorage.setItem("feedback-form-state", JSON.stringify(formInfo));
};

formEl.addEventListener('input', throttle(handleFormInput, 500));

const currentFormState = () => {

    const gettedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    if (!gettedData) {
        return
    }

    inputEl.value = gettedData.email;
    textareaEl.value = gettedData.message;
};

currentFormState();

const handleFormSubmit = (e) => {
  e.preventDefault();
    
  console.log({
    email: inputEl.value,
    message: textareaEl.value
  });

  localStorage.removeItem('feedback-form-state');
  inputEl.value = '';
  textareaEl.value = '';
};

formEl.addEventListener('submit', handleFormSubmit);




