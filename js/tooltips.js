const tooltipGreenButton = document.querySelector("#text_green_bnt");
const tooltipInfo = document.querySelector("#tooltip_info");
const tooltipGreenButton1 = document.querySelector("#text_green_bnt_1");
const tooltipInfo1 = document.querySelector("#tooltip_info_1");

const toggleTooltip = (tipButton, infoBlock) => {
  tipButton.addEventListener("mouseover", () => {
    infoBlock.style.display = "flex";
  });

  tipButton.addEventListener("mouseout", () => {
    infoBlock.style.display = "none";
  });
};

toggleTooltip(tooltipGreenButton, tooltipInfo);
toggleTooltip(tooltipGreenButton1, tooltipInfo1);

const tooltipProdBtn1 = document.querySelector("#tooltip_button_prod_1");
const tooltipProdInfo1 = document.querySelector("#tooltip_info_prod_1");
const tooltipProdBtn2 = document.querySelector("#tooltip_button_prod_2");
const tooltipProdInfo2 = document.querySelector("#tooltip_info_prod_2");
const tooltipProdBtn3 = document.querySelector("#tooltip_button_prod_3");
const tooltipProdInfo3 = document.querySelector("#tooltip_info_prod_3");

toggleTooltip(tooltipProdBtn1, tooltipProdInfo1);
toggleTooltip(tooltipProdBtn2, tooltipProdInfo2);
toggleTooltip(tooltipProdBtn3, tooltipProdInfo3);

const tipDiscountBtn1 = document.querySelector("#tooltip_button_discount_1");
const tipDiscount1 = document.querySelector("#tooltip_discount_1");
const tipDiscountBtn2 = document.querySelector("#tooltip_button_discount_2");
const tipDiscount2 = document.querySelector("#tooltip_discount_2");
const tipDiscountBtn3 = document.querySelector("#tooltip_button_discount_3");
const tipDiscount3 = document.querySelector("#tooltip_discount_3");

toggleTooltip(tipDiscountBtn1, tipDiscount1);
toggleTooltip(tipDiscountBtn2, tipDiscount2);
toggleTooltip(tipDiscountBtn3, tipDiscount3);
