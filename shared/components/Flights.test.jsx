import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import Flights from './Flights';

describe('Flights Component', () => {
  it('shouldn\'t render flights for empty props list', () => {
    const props = {
      flights: fromJS([]),
      carriersFilter: '',
    };
    const enzymeWrapper = shallow(<Flights {...props} />);

    expect(enzymeWrapper.find('p').length).toBe(0);
  });

  it('should render all flights from props list', () => {
    const props = {
      flights: fromJS([
        {
          id: 123,
          direction: {
            from: 'Moscow',
            to: 'Berlin',
          },
          arrival: '2016-06-08T19:52:27.979Z',
          departure: '2016-06-08T17:51:20.979Z',
          carrier: 'S7',
        },
        {
          id: 193,
          direction: {
            from: 'Moscow',
            to: 'New York',
          },
          arrival: '2016-06-08T21:52:27.979Z',
          departure: '2016-06-08T17:51:20.979Z',
          carrier: 'Aeroflot',
        },
      ]),
      carriersFilter: '',
    };
    const enzymeWrapper = shallow(<Flights {...props} />);

    expect(enzymeWrapper.find('tbody tr').length).toBe(2);
  });

  it('should render filtered flights from props list if filter exist', () => {
    const props = {
      flights: fromJS([
        {
          id: 123,
          direction: {
            from: 'Moscow',
            to: 'Berlin',
          },
          arrival: '2016-06-08T19:52:27.979Z',
          departure: '2016-06-08T17:51:20.979Z',
          carrier: 'S7',
        },
        {
          id: 193,
          direction: {
            from: 'Moscow',
            to: 'New York',
          },
          arrival: '2016-06-08T21:52:27.979Z',
          departure: '2016-06-08T17:51:20.979Z',
          carrier: 'Aeroflot',
        },
      ]),
      carriersFilter: 'Aeroflot',
    };
    const enzymeWrapper = shallow(<Flights {...props} />);

    expect(enzymeWrapper.find('tbody tr.visible').length).toBe(1);
  });
});
