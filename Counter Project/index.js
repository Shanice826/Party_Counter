let counterDisplay = document.getElementById('counter-display');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');
let resetBtn = document.getElementById('reset-btn');

let count = 0;

incrementBtn.addEventListener('click', () =>{
          count++;
          updateCounterDisplay();
});
decrementBtn.addEventListener('click', ()=>{
          count--;
          updateCounterDisplay();
});
resetBtn.addEventListener('click', () =>{
          count = 0;
          updateCounterDisplay();
});
function updateCounterDisplay(){
   counterDisplay.textContent = count.toString();
}
