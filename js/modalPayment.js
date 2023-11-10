// Реализация открытия/ закрытия модального окна

const btnToOpenPaymentWindow = document.querySelector("#payment_change_btn");
const iconToOpenPaymentWindow = document.querySelector("#payment_open_btn");
const btnToClosePaymentWindow = document.querySelector("#close_payment_window");
const paymentWindow = document.querySelector("#modal_payment");
const outOfWidowBtn = document.querySelector("#payment_background");

btnToOpenPaymentWindow.addEventListener("click", () => {
  paymentWindow.classList.add("showen");
});

iconToOpenPaymentWindow.addEventListener("click", () => {
  paymentWindow.classList.add("showen");
});

btnToClosePaymentWindow.addEventListener("click", () => {
  paymentWindow.classList.remove("showen");
});

outOfWidowBtn.addEventListener("click", () => {
  paymentWindow.classList.remove("showen");
});

// Реализация изменений на главной странице в соответствии с выбором

const submitBtn = document.querySelector("#choose_window_payment");
const totalWindowCardImg = document.querySelector("#total_window_pay_img");
const registrationCardImg = document.querySelector("#registration_pay_img");
const totalWindowCardNumber = document.querySelector(
  "#total_window_card_number",
);
const registrationCardNumber = document.querySelector(
  "#registration_card_number",
);
const payRadioBtn1 = document.querySelector("#payment_1");
const payRadioBtn2 = document.querySelector("#payment_2");
const payRadioBtn3 = document.querySelector("#payment_3");
const payRadioBtn4 = document.querySelector("#payment_4");

submitBtn.addEventListener("click", () => {
  if (payRadioBtn1.checked) {
    totalWindowCardImg.src = "/img/mir_card.svg";
    registrationCardImg.src = "/img/mir_card.svg";
  }
  if (payRadioBtn2.checked) {
    totalWindowCardImg.src = "/img/visa_card.svg";
    registrationCardImg.src = "/img/visa_card.svg";
  }
  if (payRadioBtn3.checked) {
    totalWindowCardImg.src = "/img/master_card_1.svg";
    registrationCardImg.src = "/img/master_card_1.svg";
  }
  if (payRadioBtn4.checked) {
    totalWindowCardImg.src = "/img/master_card_2.svg";
    registrationCardImg.src = "/img/master_card_2.svg";
  }
  for (let i = 1; i < 5; i++) {
    const cardNumber = document.querySelector(`#card_number_${i}`);
    totalWindowCardNumber.textContent = cardNumber.textContent;
    registrationCardNumber.textContent = cardNumber.textContent;
  }
  paymentWindow.classList.remove("showen");
});

// refactoring?

const cards = [
  { id: 0, numder: "1234...", expireDate: "hehe", img: "url" },
  { id: 1, numder: "1234...", expireDate: "hehe", img: "url" },
  { id: 2, numder: "1234...", expireDate: "hehe", img: "url" },
  { id: 3, numder: "1234...", expireDate: "hehe", img: "url" },
];

let selectedCard = cards[0];
