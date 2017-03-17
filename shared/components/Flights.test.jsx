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
      flights: fromJS([{
        id: 11,
        carrier: 'Aeroflot',
      }, {
        id: 12,
        carrier: 'KLM',
      }]),
      carriersFilter: '',
    };
    const enzymeWrapper = shallow(<Flights {...props} />);

    expect(enzymeWrapper.find('p').length).toBe(2);
  });

  it('should render filtered flights from props list if filter exist', () => {
    const props = {
      flights: fromJS([{
        id: 11,
        carrier: 'Aeroflot',
      }, {
        id: 12,
        carrier: 'KLM',
      }]),
      carriersFilter: 'Aeroflot',
    };
    const enzymeWrapper = shallow(<Flights {...props} />);

    expect(enzymeWrapper.find('p.visible').length).toBe(1);
  });
});
