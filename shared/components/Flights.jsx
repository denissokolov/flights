import React, { PropTypes } from 'react';
import { List } from 'immutable';

const Flights = props => (
  <div>
    {props.flights.map(flight => (
      <p key={flight.get('id')}>{flight.get('carrier')}</p>
    ))}
  </div>
);

Flights.propTypes = {
  flights: PropTypes.instanceOf(List).isRequired,
};

export default Flights;
