import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import * as FlightsActions from '../actions/FlightsActions';

import Fligts from './Flights';
import Filter from './Filter';

const Root = ({ dispatch, flights }) => (
  <div>
    <h1>Flights</h1>

    <Filter
      value={flights.get('carriersFilter')}
      carriers={flights.get('carriers')}
      onChange={value => dispatch(FlightsActions.changeCarriersFilter(value))}
    />

    <Fligts
      flights={flights.get('items')}
      carriersFilter={flights.get('carriersFilter')}
    />
  </div>
);

Root.propTypes = {
  flights: PropTypes.instanceOf(Map).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export { Root };

export default connect(state => ({
  flights: state.flights,
}))(Root);
