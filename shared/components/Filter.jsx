import React, { PropTypes } from 'react';
import { List } from 'immutable';

const Filter = props => (
  <div>
    <select>
      <option default>All Carriers</option>

      {props.carriers.map(carrier => (
        <option value={carrier} key={carrier}>
          {carrier}
        </option>
      ))}
    </select>
  </div>
);

Filter.propTypes = {
  carriers: PropTypes.instanceOf(List).isRequired,
};

export default Filter;
