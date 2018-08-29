import {assert} from 'chai';
import {pointsCounter} from './pointsCounter.js';

describe(`Check points`, () => {

  it(`should check points in the end of the game`, () => {
    const newLevel = pointsCounter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20);
    assert.equal(newLevel, 1);
  });

});
