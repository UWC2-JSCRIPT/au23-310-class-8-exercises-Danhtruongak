const element = document.querySelector("body");

let x = 255;

const screen = setInterval(() => {
  element.style.backgroundColor = `rgb(${x},${x},${x})`;

  if (x > 0) {
    x--;
  } else {
    clearInterval(screen);
  }
}, 500);
