const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const countBox = document.getElementById("countLabel");
let count = 0;

function updateCount() {
  countBox.textContent = count;
}

incrementBtn.addEventListener("click", function () {
  count++;
  updateCount();
});

decrementBtn.addEventListener("click", function () {
  count--;
  updateCount();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateCount();
  alert("You have reset the counter!!");
});

updateCount();
