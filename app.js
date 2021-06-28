// import functions
import { isEven, isOdd } from '../is-even.js';
// reference needed DOM elements
const numInput = document.getElementById('num-input');
const evenImg = document.getElementById('even-img');
const oddImg = document.getElementById('odd-img');
const button = document.getElementById('number-button');

function showImage(result) {
    const value = Number(result);
    const evenResult = isEven(value);

    if (evenResult) {
        evenImg.classList.toggle('hidden');
        setTimeout(()=>{
            evenImg.classList.toggle('hidden');
        }, 3000);
    } else {
        oddImg.classList.toggle('hidden');
        setTimeout(()=>{
            oddImg.classList.toggle('hidden');
        }, 3000);
    }
}
// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)


button.addEventListener('click', ()=> {
    const num = numInput.value;
    showImage(num);
});