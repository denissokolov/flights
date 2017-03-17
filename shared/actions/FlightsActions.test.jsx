import * as FlightsActions from './FlightsActions';

describe('FlightsActions', () => {
  describe('flushFlights', () => {
    it('should return action with items', () => {
      const items = [{
        id: 123,
        carrier: 'S7',
      }, {
        id: 193,
        carrier: 'Aeroflot',
      }];

      const expectedAction = {
        type: 'FLUSH_FLIGHTS',
        items,
      };

      expect(FlightsActions.flushFlights(items)).toEqual(expectedAction);
    });
  });

  describe('changeCarriersFilter', () => {
    it('should return action with value', () => {
      const value = 'Aeroflot';

      const expectedAction = {
        type: 'CHANGE_CARRIERS_FILTER',
        value,
      };

      expect(FlightsActions.changeCarriersFilter(value)).toEqual(expectedAction);
    });
  });
});

