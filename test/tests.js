// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { isEven } from '../is-even.js';
import { isOdd } from '../is-even.js';

const test = QUnit.test;

// name your test by what it is testing
test('Is this even?', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isEven(8); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Is this odd?', (expect) => {
    const expected = true;

    const actual = isOdd(7);

    expect.equal(actual, expected);
});