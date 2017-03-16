import { List } from 'immutable';
import FlightsReducer from './FlightsReducer';

describe('FlightsReducer', () => {
  it('should return the initial state', () => {
    expect(FlightsReducer(undefined, {}))
      .toEqual(new List());
  });
});
