// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { isEven } from '../is-even.js';

const test = QUnit.test;

// name your test by what it is testing
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//test to check if a number is even
//I want to use a remainder to test for even/odd numbers
//I'll divide everything by 2
//isEven(num1, num2) num2 should always be 2 since even numbers divide by 2
test('is this even?', (expect) => {
    //arrange: arguments and expectations
    //
    const expected = 0;

    //Act: call the function you're testing and set the result to a const
    const actual = isEven(5, 2);

    //Expect: make assertions about what is expected vs actual result
    expect.equal(actual, expected);

});

// test('is this odd?', (expect) => {
//     //arrange: arguments and expectations
//     //
//     const expected > 0;

//     //Act: call the function you're testing and set the result to a const
//     const actual = isOdd(5, 2);

//     //Expect: make assertions about what is expected vs actual result
//     expect.equal(actual, expected);

// });
