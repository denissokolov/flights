import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { Root } from './Root';

function setup() {
  const props = {
    flights: fromJS([{
      id: 11,
      carrier: 'Aeroflot',
    }, {
      id: 12,
      carrier: 'KLM',
    }]),
  };
  const enzymeWrapper = shallow(<Root {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Root Component', () => {
  it('should render h1', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('h1').text()).toBe('Flights');
  });

  it('should render Flights Component', () => {
    const { enzymeWrapper, props } = setup();

    const flightsComponent = enzymeWrapper.find('Flights');

    expect(flightsComponent.length).toBe(1);
    expect(flightsComponent.props().flights).toBe(props.flights);
  });
});
