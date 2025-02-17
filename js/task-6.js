console.log("task 5");

const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes')

let amount = 0;

createButton.addEventListener('click', () => {
    amount = parseInt(input.value);
    if(amount >= 1 && amount <= 100){
        createBoxes(amount);
        input.value = '';
    }
});

destroyButton.addEventListener('click', () => {
    boxes.innerHTML = '';
    amount = 0;
    input.value = '';
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.append(box);
    }
}