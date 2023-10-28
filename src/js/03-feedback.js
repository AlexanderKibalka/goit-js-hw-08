import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
form.elements.email.value = savedFormData.email || "";
form.elements.message.value = savedFormData.message || "";

const saveToLocalStorage = throttle(() => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}, 500);

form.addEventListener("input", saveToLocalStorage);

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
  console.log(savedFormData);
});