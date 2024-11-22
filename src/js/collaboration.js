import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const confirmEmail = document.querySelector('.done-icon')
const formEl = document.querySelector('.input-info');
const defEmail = document.querySelector('.invalid-email')
const inputEmail = document.querySelector('.form-input')


const formData = {};
const saveFormData = event => {
  const fileName = event.target.name;
  const fileValue = event.target.value.trim();

  formData[fileName] = fileValue;
  localStorage.setItem('work-Together-request', JSON.stringify(formData));
};

function checkFormValidity() {
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?(\.[a-zA-Z]{2,3})+$/;
    const isEmailValid = emailPattern.test(inputEmail.value) && inputEmail.value.trim().length > 0;
      
    if (isEmailValid) {
        confirmEmail.classList.remove('is-hidden');
    } else {
        defEmail.classList.remove('is-hidden-text');
    }
    onInputEmail()

};

function onInputEmail() {
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?(\.[a-zA-Z]{2,3})+$/;
    if (!emailPattern.test(inputEmail.value) || inputEmail.value.trim().length <= 0) {
      return;
    } else {
        defEmail.classList.add('is-hidden-text');
    }
   
  }


async function onFormSubmit(event) {
  event.preventDefault();
  checkFormValidity();
  const userInfo = JSON.parse(localStorage.getItem('work-Together-request'));

  try {
    await postData(userInfo);

    iziToast.show({
      theme: 'dark',
      class: 'toastStyle',
      title: 'Thank you for your interest in cooperation!',
      message:
        'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.',
      position: 'center',
      timeout: 0,
      close: true,
      backgroundColor: 'rgba(28,29,32,1)',
      overlay: true,
      overlayColor: 'rgba(0, 0, 0, 0.6)',
      progressBar: false,
      closeOnEscape: true,
      closeOnClick: false,
      overlayClose: true,
    });
    formEl.reset();
    localStorage.removeItem('work-Together-request');
    confirmEmail.classList.add('is-hidden');
    defEmail.classList.add('is-hidden-text');
  } catch (error) {
    iziToast.show({
      class: 'izi',
      title: 'Error',
      message: `Error: ${error.message}`,
      position: 'center',
      progressBar: false,
      closeOnEscape: true,
      closeOnClick: true,
      timeout: 0,
    });
  }

  
}

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
async function postData(obj) {
  try {
    const response = await axios.post(`${BASE_URL}/requests`, obj);
    return response.data;
  } catch (error) {
    throw error;
  }
}

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('change', saveFormData);
formEl.addEventListener('input', checkFormValidity);
inputEmail.addEventListener('input', onInputEmail);