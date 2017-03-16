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
});

