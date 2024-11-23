const hoverBtn = document.getElementById('hoverBtn');
const mouseMessage = document.getElementById('mouseMessage');

hoverBtn.addEventListener('mouseenter', () => {
    mouseMessage.textContent = 'Congrats you hovered over me successfully!';

});

hoverBtn.addEventListener('mouseleave', () => {
    mouseMessage.textContent = 'Hover over the button to change this message.';

});

