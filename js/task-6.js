function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 
}
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  let boxContent = '';
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      boxContent += `<div style ="background:${getRandomHexColor()}; 
      width: ${size}px;height:${size}px;"></div>`;
      size += 10;
    }
  } else alert('Please enter a number between 1-100');
  boxesContainer.innerHTML = boxContent;
  input.value = '';
}