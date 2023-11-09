// Реализация открытия/ закрытия модального окна

const btnToOpenDeliveryWindow = document.querySelector("#delivery_change_btn");
const iconToOpenDeliveryWindow = document.querySelector("#delivery_open_btn");
const btnToCloseDeliveryWindow = document.querySelector(
  "#close_delivery_window",
);
const outOfWidowBtn = document.querySelector("#delivery_background");
const deliveryWindow = document.querySelector("#modal_delivery");

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

// Реализация функционала внутри модального окна

const pickUpMethodBtn = document.querySelector("#pick_up_method");
const courierMethodBtn = document.querySelector("#courier_method");
const addressText1 = document.querySelector("#address_text_1");
const addressText2 = document.querySelector("#address_text_2");
const addressText3 = document.querySelector("#address_text_3");
const pickUpPointRatings = document.querySelectorAll(".courier-checked");

pickUpMethodBtn.addEventListener("change", () => {
  if (pickUpMethodBtn.checked) {
    addressText1.textContent =
      "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1";
    addressText2.textContent =
      "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1";
    addressText3.textContent = "г. Бишкек, улица Табышалиева, д. 57";
    pickUpPointRatings.forEach(
      (pickUpPointRating) => (pickUpPointRating.style.display = "block"),
    );
  }
});

courierMethodBtn.addEventListener("change", () => {
  if (courierMethodBtn.checked) {
    addressText1.textContent = "Бишкек, улица Табышалиева, 57";
    addressText2.textContent = "Бишкек, улица Жукеева-Пудовкина, 77/1";
    addressText3.textContent =
      "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1";
    pickUpPointRatings.forEach(
      (pickUpPointRating) => (pickUpPointRating.style.display = "none"),
    );
  }
});

// Реализация изменений на главной странице в соответствии с выбором

const submitBtn = document.querySelector("#choose_window_delivery");
let registrationDeliveryText = document.querySelector(
  "#registration_delivery_text",
);
let totalWindowDeliveryText = document.querySelector(
  "#total_window_delivery_text",
);
let registrationDeliveryTitle = document.querySelector(
  "#registration_delivery_title",
);
let totalWindowDeliveryTitle = document.querySelector(
  "#total_window_delivery_title",
);
const deliveryExtraInfo = document.querySelector(".delivery-extra-info");

submitBtn.addEventListener("click", () => {
  if (courierMethodBtn.checked) {
    registrationDeliveryTitle.textContent = "Доставка";
    totalWindowDeliveryTitle.textContent = "Доставка курьером";
    for (let i = 1; i < 4; i++) {
      const addressRadioBtn = document.querySelector(`#address_${i}`);
      const addressText = document.querySelector(`#address_text_${i}`);
      if (addressRadioBtn.checked) {
        totalWindowDeliveryText.textContent = addressText.textContent;
        registrationDeliveryText.textContent = addressText.textContent;
        deliveryExtraInfo.style.display = "none";
      }
    }
  }
  if (pickUpMethodBtn.checked) {
    registrationDeliveryTitle.textContent = "Пункт выдачи";
    totalWindowDeliveryTitle.textContent = "Доставка в пункт выдачи";
    for (let i = 1; i < 4; i++) {
      const addressRadioBtn = document.querySelector(`#address_${i}`);
      const addressText = document.querySelector(`#address_text_${i}`);
      if (addressRadioBtn.checked) {
        totalWindowDeliveryText.textContent = addressText.textContent;
        registrationDeliveryText.textContent = addressText.textContent;
        deliveryExtraInfo.style.display = "flex";
      }
    }
  }
  deliveryWindow.classList.remove("showen");
});
