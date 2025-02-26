console.log("task 5");

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorName = document.querySelector('.color');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  

button.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
});