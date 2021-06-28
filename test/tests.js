
import { isEven } from '../is-even.js';
import { isOdd } from '../is-even.js';

const test = QUnit.test;


test('Is this even?', (expect) => {
    const expected = true;

    
    const actual = isEven(8);

    expect.equal(actual, expected);
});

test('Is this odd?', (expect) => {
    const expected = true;

    const actual = isOdd(7);

    expect.equal(actual, expected);
});