import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import Flights from './Flights';

describe('Flights Component', () => {
  it('shouldn\'t render flights for empty props list', () => {
    const props = {
      flights: fromJS([]),
    };
    const enzymeWrapper = shallow(<Flights {...props} />);

    expect(enzymeWrapper.find('p').length).toBe(props.flights.size);
  });

  it('should render all flights from props list', () => {
    const props = {
      flights: fromJS([{
        id: 11,
        carrier: 'Aeroflot',
      }, {
        id: 12,
        carrier: 'KLM',
      }]),
    };
    const enzymeWrapper = shallow(<Flights {...props} />);

    expect(enzymeWrapper.find('p').length).toBe(props.flights.size);
  });
});
