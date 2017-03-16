import { List, fromJS } from 'immutable';
import immutifyState from './immutifyState';

describe('immutifyState', () => {
  it('should return object for empty state', () => {
    const initialState = {};

    expect(immutifyState(initialState))
      .toEqual({});
  });

  it('should return the immutified state', () => {
    const initialState = {
      simpleArray: [1, 2],
      complexArray: [{ a: 1 }, { a: 2 }],
      numb: 13,
      empty: null,
    };

    expect(immutifyState(initialState))
      .toEqual({
        simpleArray: new List(initialState.simpleArray),
        complexArray: fromJS(initialState.complexArray),
        numb: initialState.numb,
        empty: initialState.empty,
      });
  });
});
