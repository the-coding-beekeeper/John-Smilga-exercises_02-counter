const decreaseButton = document.getElementById("decrease-btn");
const resetButton = document.getElementById("reset-btn");
const increaseButton = document.getElementById("increase-btn");
const numberDisplay = document.getElementById("number");
let count = 0;

document.addEventListener("click", (e) => {
  if(e.target === decreaseButton) {
    count--;
  } else if (e.target === resetButton){
    count = 0;
  } else if (e.target === increaseButton) {
    count++;
  } else return;
  numberDisplay.innerText = count;
  colorCheck();
});

function colorCheck() {
  count < 0 ? numberDisplay.style.color = "red" : numberDisplay.style.color = "black"
};

//*****************************
// alternative solution
//*****************************
// const decreaseButton = document.getElementById("decrease-btn");
// const resetButton = document.getElementById("reset-btn");
// const increaseButton = document.getElementById("increase-btn");
// const numberDisplay = document.getElementById("number");
// let count = 0;


// decreaseButton.addEventListener("click", () => {
//   count--;
//   numberDisplay.innerText = count;
//   colorCheck();
// });
// resetButton.addEventListener("click", () => {
//   count = 0;
//   numberDisplay.innerText = count;
//   colorCheck();
// });
// increaseButton.addEventListener("click", () => {
//   count++;
//   numberDisplay.innerText = count;
//   colorCheck();
// });
// function colorCheck() {
//   count < 0 ? numberDisplay.style.color = "red" : numberDisplay.style.color = "black"
// };
