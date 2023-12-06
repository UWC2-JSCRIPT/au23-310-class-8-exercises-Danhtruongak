const body = document.querySelector("body");

let x = 0;

const animate = function () {
  if (x < 250) {
    x++;
    body.style.backgroundColor = `rgb(${x},${x},${x})`;
    requestAnimationFrame(animate);
  }
  console.log("sun rise");
};
requestAnimationFrame(animate);
