let button = document.querySelector(".button--pressed");
console.log(button);
let color = false;
button.addEventListener("click", function () {
  if (color) {
    document.querySelector(".button--pressed").style.background = "#4690FF";
    color = false;
  } else {
    document.querySelector(".button--pressed").style.background = "#2A7BF5";
    color = true;
  }
});

let button_secondary = document.querySelector(".button--secondary--pressed");
let color_secondary = false;
button_secondary.addEventListener("click", function () {
  if (color_secondary) {
    document.querySelector(".button--secondary--pressed").style.background =
      "#FFFFFF";
    document.querySelector(".button--secondary--pressed").style.borderColor =
      "#4690FF";
    document.querySelector(".button--secondary--pressed").style.color =
      " #4690FF";
    color_secondary = false;
  } else {
    document.querySelector(".button--secondary--pressed").style.background =
      "#E4F0FF";
    document.querySelector(".button--secondary--pressed").style.borderColor =
      "#2A7BF5";
    document.querySelector(".button--secondary--pressed").style.color =
      "#639EF8";
    color_secondary = true;
  }
});
