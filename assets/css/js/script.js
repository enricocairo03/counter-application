const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn")
const countBox = document.getElementById("countLabel");
let count = 0;

incrementBtn.onclick = function(){
   count++;
   countBox.textContent = count;
}
decrementBtn.onclick = function(){
   count--;
   countBox.textContent = count;
}
resetBtn.onclick = function(){
   count = 0;
   countBox.textContent = count;
}