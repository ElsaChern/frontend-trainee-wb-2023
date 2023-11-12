import { changeOrderButtonText } from "./checkboxes.js";

const productsInCartContainer = document.querySelector(".goods-in-stock");
export const products = productsInCartContainer.querySelectorAll(".product");

// Функция, которая отображает общую цену товара

let totalCurrentSum = document.querySelector("#total_sum");
let totalOldtSum = document.querySelector("#total_old_sum");
let totalDiscount = document.querySelector("#total_discount");
let totalProductAmount = document.querySelector("#total_amount");

// Функция, которая отображает количество товаров в корзине при загрузке страницы.

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

  changeOrderButtonText();
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

    // изменение суммы скидки в сплывающем окне
    const discount55 = product.querySelector(".discount-55");
    const discount10 = product.querySelector(".discount-10");

    const discount55Value = -productOldPriceValue * 0.55;
    discount55.textContent = `${parseInt(
      String(discount55Value),
    ).toLocaleString("ru")} сом`;

    const discount10Value = -productOldPriceValue * 0.1;
    discount10.textContent = `${parseInt(
      String(discount10Value),
    ).toLocaleString("ru")} сом`;

    calculateTotal();
  };

  checkCounterBtn(+counterInput.value);

  checkbox.addEventListener("change", () => {
    calculateTotal();
    changeDeliveryItems(product);
  });

  counterMinus.addEventListener("click", () => {
    calculatePrice(+counterInput.value - 1);
    changeDeliveryItems(product);
  });

  counterPlus.addEventListener("click", () => {
    calculatePrice(+counterInput.value + 1);
    changeDeliveryItems(product);
  });

  counterInput.addEventListener("change", (e) => {
    const newValue = +e.target.value;
    const oldValue = +e.target.defaultValue;

    if (newValue > itemsLeft || newValue < 1) {
      calculatePrice(oldValue);
    } else {
      calculatePrice(newValue);
    }

    changeDeliveryItems(product);
  });
});

// Функция, которая отображает/скрывает товары в блоке "Способ доставки"

export const changeDeliveryItems = (product) => {
  const goodsGroup1 = document.querySelector("#goods_group_1");
  const goodsGroup2 = document.querySelector("#goods_group_2");
  const productId = product.id.slice(-1);
  const itemsCount = +product.querySelector('input[name="counter"]').value;

  const checkedProducts = [...products].filter((item) => {
    return item.querySelector(".checkbox").checked;
  });

  let currentGoodId = `#delivery_good_${productId}`;

  if (product.querySelector(".checkbox").checked) {
    let currentGood1 = goodsGroup1.querySelector(currentGoodId);
    let quantityItem1 = currentGood1.querySelector(".quantity");

    currentGood1.style.display = "";
    quantityItem1.style.display = "";

    // 5-6 февраля
    if (itemsCount == 1) {
      quantityItem1.style.display = "none";
    } else if (productId == 2 && itemsCount > 184) {
      quantityItem1.textContent = 184;
    } else if (itemsCount > 1) {
      quantityItem1.textContent = itemsCount;
    }

    // 7-8 февраля
    if (productId == 2) {
      let currentGood2 = goodsGroup2.querySelector(currentGoodId);
      let quantityItem2 = currentGood2.querySelector(".quantity");

      goodsGroup2.style.display = "";

      if (itemsCount > 184) {
        currentGood2.style.display = "";
        if (itemsCount == 185) {
          quantityItem2.style.display = "none";
        } else {
          quantityItem2.style.display = "";
          quantityItem2.textContent = itemsCount - 184;
        }
      } else {
        currentGood2.style.display = "none";
        goodsGroup2.style.display = "none";
      }
    }
  } else {
    // 5-6 февраля
    let currentGood1 = goodsGroup1.querySelector(currentGoodId);
    currentGood1.style.display = "none";

    // 7-8 февраля
    if (productId == 2) {
      let currentGood2 = goodsGroup2.querySelector(currentGoodId);
      currentGood2.style.display = "none";

      goodsGroup2.style.display = "none";
    }
  }

  if (checkedProducts.length === 0) {
    goodsGroup1.style.display = "none";
  } else {
    goodsGroup1.style.display = "";
  }
};
