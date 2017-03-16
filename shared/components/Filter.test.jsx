import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import Filter from './Filter';

describe('Flights Component', () => {
  it('should render only default option for empty props carriers list', () => {
    const props = {
      carriers: fromJS([]),
    };
    const enzymeWrapper = shallow(<Filter {...props} />);

    expect(enzymeWrapper.find('option').length).toBe(1);
    expect(enzymeWrapper.find('option').text()).toBe('All Carriers');
  });

  it('should render all carriers options from props list', () => {
    const props = {
      carriers: fromJS(['S7', 'Aeroflot']),
    };
    const enzymeWrapper = shallow(<Filter {...props} />);

    expect(enzymeWrapper.find('option').length).toBe(props.carriers.size + 1);
  });
});
