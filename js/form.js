const nameInput = {
  label: document.querySelector("#name_label"),
  text: document.querySelector("#name_input"),
  error: document.querySelector("#name_error"),
  regEx: /^[А-Я]{1}[а-яА-Я\-]+$/,
};

const secondNameInput = {
  label: document.querySelector("#secondName_label"),
  text: document.querySelector("#secondName_input"),
  error: document.querySelector("#secondName_error"),
  regEx: /^[А-Я]{1}[а-яА-Я\-]+$/,
};

const emailInput = {
  label: document.querySelector("#email_label"),
  text: document.querySelector("#email_input"),
  error: document.querySelector("#email_error"),
  regEx:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const phoneInput = {
  label: document.querySelector("#phone_label"),
  text: document.querySelector("#phone_input"),
  error: document.querySelector("#phone_error"),
  regEx: /^(\+\d{1}[\ ])(\d{3}[\ ]){2}\d{2}[\ ]\d{2}$/,
};

const innInput = {
  label: document.querySelector("#inn_label"),
  text: document.querySelector("#inn_input"),
  error: document.querySelector("#inn_error"),
  regEx: /^[0-9]{14}$/,
};

const validateForm = (input) => {
  input.text.addEventListener("change", () => {
    input.label.style.opacity = "1";
    if (!input.text.value || !input.regEx.test(input.text.value)) {
      showError(input);
    } else {
      hideError(input);
    }
  });
};

const showError = (input) => {
  input.text.style.color = "rgba(245, 81, 35, 1)";
  input.error.style.opacity = "1";
  input.text.style.borderBottomColor = "rgba(245, 81, 35, 1)";
  if (input.text.id == "inn_input") {
    input.error.textContent = "Неверный ИНН";
    input.error.style.color = "rgba(245, 81, 35, 1)";
  }
};

const hideError = (input) => {
  input.text.style.color = "rgba(0, 0, 0, 1)";
  input.error.style.opacity = "0";
  input.text.style.borderBottomColor = "rgba(0, 0, 0, 1)";
  if (input.text.id == "inn_input") {
    input.error.textContent = "Для таможенного оформления";
    input.error.style.opacity = "1";
    input.error.style.color = "rgba(0, 0, 0, 1)";
  }
};

validateForm(nameInput);
validateForm(secondNameInput);
validateForm(emailInput);
validateForm(phoneInput);
validateForm(innInput);
