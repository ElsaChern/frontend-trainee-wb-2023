const productsInCartContainer = document.querySelector(".goods-in-stock");
const products = productsInCartContainer.querySelectorAll(".product");

// Функция, которая отображает общую цену товара

let totalCurrentSum = document.querySelector("#total_sum");
let totalOldtSum = document.querySelector("#total_old_sum");
let totalDiscount = document.querySelector("#total_discount");
const checkboxAllGoods = document.querySelector("#checked_all"); // Сделать проверку на кнопку

const calculateTotal = () => {
  let totalCurrentSumValue = 0;
  let totalOldSumValue = 0;
  let totalDiscountValue = 0;

  const checkedProducts = [...products].filter((product) => {
    return product.querySelector(".checkbox").checked;
  });

  checkedProducts.forEach((product) => {
    let productCurrentPrice = product
      .querySelector("#current_price")
      .textContent.replaceAll(" ", "");
    let productOldPrice = product
      .querySelector("#old_price")
      .textContent.replaceAll(" ", "");
    let prodictDiscount = Number(productOldPrice) - Number(productCurrentPrice);

    totalCurrentSumValue += +productCurrentPrice;
    totalOldSumValue += +productOldPrice;
    totalDiscountValue += prodictDiscount;
  });

  totalCurrentSum.textContent = parseInt(
    String(totalCurrentSumValue),
  ).toLocaleString("ru");
  totalOldtSum.textContent = parseInt(String(totalOldSumValue)).toLocaleString(
    "ru",
  );
  totalDiscount.textContent = parseInt(
    String(totalDiscountValue),
  ).toLocaleString("ru");
};

// const calculatePrice = () => {};

products.forEach((product) => {
  const checkbox = product.querySelector(".checkbox");
  // const counterMinus = product.querySelector(".minus");
  // const counterPlus = product.querySelector(".plus");
  // const counterInput = product.querySelector(".value");
  // console.log(checkbox);

  checkbox.addEventListener("change", () => {
    calculateTotal();
  });

  // counterMinus.addEventListener("click", calculatePrice);
  // counterPlus.addEventListener("click", calculatePrice);
  // counterInput.addEventListener("click", calculatePrice);
});

// Функция, которая отображает количество товаров в корзине при загрузке страницы.

// const initCartNumber = () => {
//   let counter = document.querySelector(".quantity-basket");
//   counter.textContent = products.length;
// };
