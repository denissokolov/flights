import React, { PropTypes } from 'react';
import { List } from 'immutable';

const Flights = ({ flights, carriersFilter }) => (
  <div>
    {flights.map(flight => (
      <p
        key={flight.get('id')}
        className={carriersFilter && carriersFilter !== flight.get('carrier') ? 'hidden' : 'visible'}
        style={{ display: carriersFilter && carriersFilter !== flight.get('carrier') ? 'none' : 'block' }}
      >
        {flight.get('carrier')}
      </p>
    ))}
  </div>
);

Flights.propTypes = {
  flights: PropTypes.instanceOf(List).isRequired,
  carriersFilter: PropTypes.string.isRequired,
};

export default Flights;
