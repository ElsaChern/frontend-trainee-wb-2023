// Goods IN stock //
const hideCardsInStockBtn = document.querySelector("#hide_cards_1");
const hiddenCardsInStock = document.querySelector("#hidden_goods_in_stock");
const selectAll = document.querySelector("#select_all");
const totalGoodsPrice = document.querySelector("#total_goods_price");
let isBtnInStockClicked = true;

hideCardsInStockBtn.addEventListener("click", () => {
  if (isBtnInStockClicked) {
    hiddenCardsInStock.style.display = "none";
    hideCardsInStockBtn.style.transform = "rotate(180deg)";
    selectAll.style.display = "none";
    totalGoodsPrice.textContent = "266 товаров · 2 100 569 сом";
    totalGoodsPrice.classList.add("show");
  } else {
    hiddenCardsInStock.style.display = "flex";
    hideCardsInStockBtn.style.transform = "rotate(0deg)";
    selectAll.style.display = "flex";
    totalGoodsPrice.classList.remove("show");
  }
  isBtnInStockClicked = !isBtnInStockClicked;
});

// Goods OUT of stock //
const hideCardsOutStockBtn = document.querySelector("#hide_cards_2");
const hiddenCardsOutStock = document.querySelector("#hidden_goods_out_stock");
let isBtnOutStockClicked = true;

hideCardsOutStockBtn.addEventListener("click", () => {
  if (isBtnOutStockClicked) {
    hiddenCardsOutStock.style.display = "none";
    hideCardsOutStockBtn.style.transform = "rotate(180deg)";
  } else {
    hiddenCardsOutStock.style.display = "flex";
    hideCardsOutStockBtn.style.transform = "rotate(0deg)";
  }
  isBtnOutStockClicked = !isBtnOutStockClicked;
});
