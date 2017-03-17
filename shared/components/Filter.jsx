import React, { PropTypes } from 'react';
import { List } from 'immutable';

const Filter = props => (
  <div>
    <select onChange={event => props.onChange(event.target.value)}>
      <option value="" default>
        All Carriers
      </option>

      {props.carriers.map(carrier => (
        <option
          value={carrier}
          key={carrier}
        >
          {carrier}
        </option>
      ))}
    </select>
  </div>
);

Filter.propTypes = {
  carriers: PropTypes.instanceOf(List).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
