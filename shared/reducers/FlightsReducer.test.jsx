import { fromJS } from 'immutable';
import FlightsReducer from './FlightsReducer';

describe('FlightsReducer', () => {
  it('should return the initial state', () => {
    expect(FlightsReducer(undefined, {}))
      .toEqual(fromJS({
        items: [],
        carriers: [],
      }));
  });

  it('should handle FLUSH_FLIGHTS', () => {
    const items = [{
      id: 123,
      carrier: 'S7',
    }, {
      id: 193,
      carrier: 'Aeroflot',
    }];

    expect(FlightsReducer(undefined, {
      type: 'FLUSH_FLIGHTS',
      items,
    })).toEqual(fromJS({
      items,
      carriers: ['S7', 'Aeroflot'],
    }));
  });
});
