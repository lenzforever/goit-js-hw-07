function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 
}

const changeRbgBtn = document.querySelector('.change-color');
changeRbgBtn.addEventListener('click', changeRbg);

function changeRbg() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    document.querySelector('.color').textContent = newColor;
}