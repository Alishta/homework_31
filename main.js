// Finding the required element
const block = document.querySelector(".block");
//Subtract the width and height of the square from the width and height of the window.
const getWidth = window.innerWidth - 100;
const getHeight = window.innerHeight - 100;
console.log(getWidth, getHeight);

const rnd = (max) => Math.ceil(Math.random() * max);

// Set a random color
setInterval(() => {
    block.style.backgroundColor = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
}, 500);

// Set random height and width
setInterval(() => {
    block.style.top = `${rnd(getHeight)}px`;
    block.style.left = `${rnd(getWidth)}px`;
}, 1000);