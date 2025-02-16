
console.log("task 3");

const nameInput = document.getElementById('name-input');
const nameOut = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  nameOut.textContent = nameInput.value.trim() || 'Anonymous';
})