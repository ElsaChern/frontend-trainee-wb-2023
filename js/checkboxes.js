import { calculateTotal } from "./products.js";

// Изменения кнопки "Заказать" в Total Window
const toOrderButton = document.querySelector("#to_order_button");
const payCheckbox = document.querySelector("#pay_checkbox");
const TotalSum = document.querySelector("#total_sum");

payCheckbox.addEventListener("change", () => {
  changeOrderButtonText();
});

const changeOrderButtonText = () => {
  if (payCheckbox.checked) {
    toOrderButton.textContent = `Оплатить ${TotalSum.textContent}`;
  } else {
    toOrderButton.textContent = "Заказать";
  }
};

// Изменение чекбоксов у товаров в корзине
const productsInCartContainer = document.querySelector(".goods-in-stock");
const checkboxAllGoods = document.querySelector("#checked_all");
const checkboxes = productsInCartContainer.querySelectorAll(".checkbox");

checkboxAllGoods.addEventListener("change", () => {
  if (checkboxAllGoods.checked) {
    for (let i = 0; i < 3; i++) {
      checkboxes[i].checked = true;
    }
  } else {
    for (let i = 0; i < 3; i++) {
      checkboxes[i].checked = false;
    }
  }
  calculateTotal();
});

for (let i = 0; i < 3; i++) {
  checkboxes[i].addEventListener("change", () => {
    checkboxAllGoods.checked =
      checkboxes[0].checked && checkboxes[1].checked && checkboxes[2].checked;
  });
}
