const productsInCartContainer = document.querySelector(".goods-in-stock");
const products = productsInCartContainer.querySelectorAll(".product");

// Функция, которая отображает общую цену товара

let totalCurrentSum = document.querySelector("#total_sum");
let totalOldtSum = document.querySelector("#total_old_sum");
let totalDiscount = document.querySelector("#total_discount");
let totalProductAmount = document.querySelector("#total_amount");

const showCartNumber = () => {
  let counter = document.querySelector(".quantity-basket");
  counter.textContent = products.length;
};

showCartNumber();

export const calculateTotal = () => {
  let totalCurrentSumValue = 0;
  let totalOldSumValue = 0;
  let totalDiscountValue = 0;
  let totalAmount = 0;

  const checkedProducts = [...products].filter((product) => {
    return product.querySelector(".checkbox").checked;
  });

  checkedProducts.forEach((product) => {
    let priductCurrentAmount = +product.querySelector('input[name="counter"]')
      .value;
    let productCurrentPrice = +product
      .querySelector("#current_price")
      .textContent.replace(/\D/g, "");
    let productOldPrice = +product
      .querySelector("#old_price")
      .textContent.replace(/\D/g, "");
    let productDiscount = productOldPrice - productCurrentPrice;

    totalAmount += priductCurrentAmount;
    totalCurrentSumValue += productCurrentPrice;
    totalOldSumValue += productOldPrice;
    totalDiscountValue += productDiscount;
  });

  totalProductAmount.textContent =
    parseInt(String(totalAmount)).toLocaleString("ru") + " товара";
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

// Функция, которая отображает цену товара для каждого из продуктов

products.forEach((product) => {
  const checkbox = product.querySelector(".checkbox");
  const counterMinus = product.querySelector(".minus");
  const counterPlus = product.querySelector(".plus");
  const counterInput = product.querySelector('input[name="counter"]');
  const productCurrentPrices = product.querySelectorAll("#current_price");
  const productOldPrices = product.querySelectorAll("#old_price");
  const itemsLeft = +product
    .querySelector(".remainder")
    ?.textContent.replace(/\D/g, "");

  const checkCounterBtn = (value) => {
    if (value <= 1) {
      counterMinus.disabled = true;
    } else {
      counterMinus.disabled = false;
    }
    if (value >= itemsLeft) {
      counterPlus.disabled = true;
    } else {
      counterPlus.disabled = false;
    }
  };

  const calculatePrice = (newCount) => {
    let pricePerItem = +product.dataset.price;
    checkCounterBtn(newCount);
    counterInput.value = newCount;

    const productCurrentPriceValue = Math.ceil(pricePerItem * newCount * 0.35);
    productCurrentPrices.forEach((item) => {
      item.textContent = parseInt(
        String(productCurrentPriceValue),
      ).toLocaleString("ru");
    });
    const productOldPriceValue = pricePerItem * newCount;
    productOldPrices.forEach((item) => {
      item.textContent = parseInt(String(productOldPriceValue)).toLocaleString(
        "ru",
      );
    });
    calculateTotal();
  };

  checkCounterBtn(+counterInput.value);

  checkbox.addEventListener("change", () => {
    calculateTotal();
  });

  counterMinus.addEventListener("click", () => {
    calculatePrice(+counterInput.value - 1);
  });

  counterPlus.addEventListener("click", () => {
    calculatePrice(+counterInput.value + 1);
  });

  counterInput.addEventListener("change", (e) => {
    const newValue = +e.target.value;
    const oldValue = +e.target.defaultValue;

    if (newValue > itemsLeft || newValue < 1) {
      calculatePrice(oldValue);
    } else {
      calculatePrice(newValue);
    }
  });
});

// Функция, которая отображает количество товаров в корзине при загрузке страницы.
