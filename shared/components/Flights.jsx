import React, {PropTypes} from 'react';
import {List} from 'immutable';

class Flights extends React.Component {
  static propTypes = {
    flights: PropTypes.instanceOf(List).isRequired,
  };

  render() {
    const {flights} = this.props;

    return (
      <div>
        {flights.map((flight) => (
          <p key={flight.get('id')}>{flight.get('carrier')}</p>
        ))}
      </div>
    );
  }
}

export default Flights;

