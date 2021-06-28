// import functions
import { iseven, isOdd } from '../is-even.js';
// reference needed DOM elements
const numInput = document.getElementById('num-input');
const evenImg = document.getElementById('even-img');
const oddImg = document.getElementById('odd-img');
const button = document.getElementById('number-button');


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)


button.addEventListener('click', ()=> {
    console.log('you clicked the button!');
});