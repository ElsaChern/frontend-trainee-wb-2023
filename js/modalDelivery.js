const btnToOpenDeliveryWindow = document.querySelector("#delivery_change_btn");
const iconToOpenDeliveryWindow = document.querySelector("#delivery_open_btn");
const btnToCloseDeliveryWindow = document.querySelector(
  "#close_delivery_window",
);
const deliveryWindow = document.querySelector("#modal_delivery");
const outOfWidowBtn = document.querySelector("#background");

btnToOpenDeliveryWindow.addEventListener("click", () => {
  deliveryWindow.classList.add("showen");
});

iconToOpenDeliveryWindow.addEventListener("click", () => {
  deliveryWindow.classList.add("showen");
});

btnToCloseDeliveryWindow.addEventListener("click", () => {
  deliveryWindow.classList.remove("showen");
});

outOfWidowBtn.addEventListener("click", () => {
  deliveryWindow.classList.remove("showen");
});
