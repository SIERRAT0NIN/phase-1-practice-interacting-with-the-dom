// See the timer increment every second once the page has loaded.
// - Manually increment and decrement the counter using the plus and minus buttons.

// SetInterval
let likes = [];
let count = [];
const btnIncrease = document.getElementById("btn-increase");
const btnDecrease = document.getElementById("btn-decrease");
const countDisplay = document.getElementById("count");
const heartBtn = document.querySelector("#heart-btn");
const likesCounter = document.querySelector(".likes");
const list = document.querySelector("#list");
const commentInput = document.querySelector("#comment-input");
const submitBtn = document.querySelector("#submit");
// const countIncrease = () => {
//     count++;
//     console.log(count);
//     return count;
// };
// setInterval(btnIncrease, 1000);
btnIncrease.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
  return count;
});
btnDecrease.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
  return count;
});
heartBtn.addEventListener("click", () => {
  likes++;
  likesCounter.textContent = `${likes}likes`;
  const h2 = document.createElement("h2");
  h2.appendChild(likes);
  debugger;
  return h2;
});
