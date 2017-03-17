import React, { PropTypes } from 'react';
import { List } from 'immutable';

const Filter = props => (
  <select
    style={{ margin: '33px 0 0 20px' }}
    onChange={event => props.onChange(event.target.value)}
  >
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
);

Filter.propTypes = {
  carriers: PropTypes.instanceOf(List).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
