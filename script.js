//your JS code here. If required.
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');

const coffeeColor = '#6F4E37'; // Coffee color
const lavenderColor = '#E6E6FA'; // Lavender color

function changeColors(id) {
  if (id === 'square1') {
    square2.style.backgroundColor = coffeeColor;
    square3.style.backgroundColor = coffeeColor;
  } else if (id === 'square2') {
    square1.style.backgroundColor = coffeeColor;
    square3.style.backgroundColor = coffeeColor;
  } else if (id === 'square3') {
    square1.style.backgroundColor = coffeeColor;
    square2.style.backgroundColor = coffeeColor;
  }
}

function resetColors() {
  square1.style.backgroundColor = lavenderColor;
  square2.style.backgroundColor = lavenderColor;
  square3.style.backgroundColor = lavenderColor;
}

square1.addEventListener('mouseover', () => changeColors('square1'));
square1.addEventListener('mouseout', resetColors);

square2.addEventListener('mouseover', () => changeColors('square2'));
square2.addEventListener('mouseout', resetColors);

square3.addEventListener('mouseover', () => changeColors('square3'));
square3.addEventListener('mouseout', resetColors);