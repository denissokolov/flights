import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {List} from 'immutable';
import Fligts from './Flights';

class Root extends React.Component {
  static propTypes = {
    flights: PropTypes.instanceOf(List).isRequired,
  };

  render() {
    const {flights} = this.props;

    return (
      <div>
        <h1>Flights</h1>

        <Fligts flights={flights}/>
      </div>
    );
  }
}
export default connect(state => ({
  flights: state.flights
}))(Root);
