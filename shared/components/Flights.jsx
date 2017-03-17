import React, { PropTypes } from 'react';
import { List } from 'immutable';

const Flights = ({ flights, carriersFilter }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Carrier</th>
      </tr>
    </thead>

    <tbody>
      {flights.map(flight => (
        <tr
          key={flight.get('id')}
          className={carriersFilter && carriersFilter !== flight.get('carrier') ? 'hidden' : 'visible'}
        >
          <td>
            {flight.get('direction').get('from')}
            <br />
            <small className="text-primary">
              {(new Date(flight.get('departure'))).toUTCString()}
            </small>
          </td>
          <td>
            {flight.get('direction').get('to')}
            <br />
            <small className="text-primary">
              {(new Date(flight.get('arrival'))).toUTCString()}
            </small>
          </td>
          <td>
            {flight.get('carrier')}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Flights.propTypes = {
  flights: PropTypes.instanceOf(List).isRequired,
  carriersFilter: PropTypes.string.isRequired,
};

export default Flights;
