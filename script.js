// Mouse Event; Hover over button changes message.

const hoverBtn = document.getElementById('hoverBtn');
const mouseMessage = document.getElementById('mouseMessage');

hoverBtn.addEventListener('mouseenter', () => {
    mouseMessage.textContent = 'Congrats you hovered over me successfully!';

});

hoverBtn.addEventListener('mouseleave', () => {
    mouseMessage.textContent = 'Hover over the button to change this message.';

});

// Keyboard Event; Captures keypress in input, outputs last input
const Keyboard = document.getElementById('Keyboard');
const keyMessage = document.getElementById('keyMessage');

Keyboard.addEventListener('keydown', (event) => {
    keyMessage.textContent = `Last key pressed: ${event.key}`;
});

// Form Event; Submits any message successfully, prevents default.
const simpleForm = document.getElementById('simpleForm');
const formMessage = document.getElementById('formMessage');

simpleForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Form submitted successfully!';
});

