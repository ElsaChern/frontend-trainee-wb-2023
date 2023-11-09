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

// Реализация функционала внутри модального окна
