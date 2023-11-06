const toOrderButton = document.querySelector("#to_order_button");
const payCheckbox = document.querySelector("#pay_checkbox");
const TotalSum = document.querySelector("#total_sum");

// Изменения кнопки "Заказать" в Total Window

payCheckbox.addEventListener("change", () => {
  changeOrderButtonText();
});

const changeOrderButtonText = () => {
  if (payCheckbox.checked) {
    toOrderButton.innerHTML = `Оплатить ${TotalSum.innerHTML}`;
  } else {
    toOrderButton.innerHTML = "Заказать";
  }
};
