const productsInCartContainer = document.querySelector(".goods-in-stock");
const products = productsInCartContainer.querySelectorAll(".product");

products.forEach((product) => {
  const checkbox = product.querySelector(".checkbox");
  const counterMinus = product.querySelector(".minus");
  const counterPlus = product.querySelector(".plus");
  const counterInput = product.querySelector(".value");

  checkbox.addEventListener("click", calculateTotal);

  counterMinus.addEventListener("click", calculatePrice);
  counterPlus.addEventListener("click", calculatePrice);
  counterInput.addEventListener("click", calculatePrice);
});

const checkedProducts = [...products].filter((product) => {
  return product.querySelector(".checkbox").checked;
});

const calculateTotal = () => {
  totalCurrentPrice = totalOldPrice;
  totalItemsCount;
  totalDiscount;
};

// функция, которая отображает количество товаров в корзине при загрузке страницы.
const initCartNumber = () => {
  counter = document.querySelector(".quantity-basket");
  counter.textContent = products.length;
};

const cards = [
  { id: 0, numder: "1234...", expireDate: "hehe", img: "url" },
  { id: 1, numder: "1234...", expireDate: "hehe", img: "url" },
  { id: 2, numder: "1234...", expireDate: "hehe", img: "url" },
  { id: 3, numder: "1234...", expireDate: "hehe", img: "url" },
];

let selectedCard = cards[0];
