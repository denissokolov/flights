import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Fligts from './Flights';
import Filter from './Filter';

const Root = props => (
  <div>
    <h1>Flights</h1>

    <Filter carriers={props.flights.get('carriers')} />

    <Fligts flights={props.flights.get('items')} />
  </div>
);

Root.propTypes = {
  flights: PropTypes.instanceOf(Map).isRequired,
};

export { Root };

export default connect(state => ({
  flights: state.flights,
}))(Root);
