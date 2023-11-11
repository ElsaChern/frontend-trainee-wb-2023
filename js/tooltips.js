const toggleTooltip = (tipButton, infoBlock) => {
  tipButton.addEventListener("mouseover", () => {
    infoBlock.style.display = "flex";
  });

  tipButton.addEventListener("mouseout", () => {
    infoBlock.style.display = "none";
  });
};

for (let i = 1; i < 3; i++) {
  let tooltipGreenButton = document.querySelector(`#text_green_bnt_${i}`);
  let tooltipInfo = document.querySelector(`#tooltip_info_${i}`);

  toggleTooltip(tooltipGreenButton, tooltipInfo);
}

for (let i = 1; i < 4; i++) {
  let tooltipProdBtn = document.querySelector(`#tooltip_button_prod_${i}`);
  let tooltipProdInfo = document.querySelector(`#tooltip_info_prod_${i}`);

  toggleTooltip(tooltipProdBtn, tooltipProdInfo);
}

for (let i = 1; i < 4; i++) {
  const tipDiscountBtn = document.querySelector(
    `#tooltip_button_discount_${i}`,
  );
  const tipDiscount = document.querySelector(`#tooltip_discount_${i}`);

  toggleTooltip(tipDiscountBtn, tipDiscount);
}
