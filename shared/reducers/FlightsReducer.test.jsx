import { fromJS } from 'immutable';
import FlightsReducer from './FlightsReducer';

describe('FlightsReducer', () => {
  it('should return the initial state', () => {
    expect(FlightsReducer(undefined, {}))
      .toEqual(fromJS({
        items: [],
        carriers: [],
        carriersFilter: '',
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
      carriersFilter: '',
    }));
  });

  it('should handle CHANGE_CARRIERS_FILTER', () => {
    const carriersFilter = 'Aeroflot';

    expect(FlightsReducer(undefined, {
      type: 'CHANGE_CARRIERS_FILTER',
      value: carriersFilter,
    })).toEqual(fromJS({
      items: [],
      carriers: [],
      carriersFilter,
    }));
  });
});
