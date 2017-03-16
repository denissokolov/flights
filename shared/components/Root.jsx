import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import Fligts from './Flights';

const Root = props => (
  <div>
    <h1>Flights</h1>

    <Fligts flights={props.flights} />
  </div>
);

Root.propTypes = {
  flights: PropTypes.instanceOf(List).isRequired,
};

export default connect(state => ({
  flights: state.flights,
}))(Root);
