const noSelect = document.getElementById('hotel');
const yesSelect = document.getElementById('yes');
const noBtn = document.getElementById('to-hotel');
const yesBtn = document.getElementById('to-yes');
const priceText = document.getElementById('price')

let totalPrice = 0;
function changePrice(method, price) {
  if (method==='add') {
    totalPrice += price;
  } else if (method==='rem') {
    totalPrice -= price;
  } else {
    totalPrice = 0;
  }
  priceText.textContent = totalPrice;
}
changePrice(0)

yesBtn.addEventListener('click', () => {
  const selectedTransferOptions = document.querySelectorAll('#hotel option:checked');
  const existingYesOptions = document.querySelectorAll('#yes option');
  changePrice('add', selectedTransferOptions.length*10);
  yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener('click', () => {
  const selectedTransferOptions = document.querySelectorAll('#yes option:checked');
  const existingNoOptions = document.querySelectorAll('#hotel option');
  changePrice('rem', selectedTransferOptions.length*10);
  noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});