import React from 'react';

<<<<<<< HEAD
const Filter = ({ filters, handleChange }) => (
  <select onChange={handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>
);

Filter.defaultProps = {
  filters: [],
  handleChange: () =>{}
};
=======
const Filter = props =>
  <select onChange={props.handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {props.filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>

Filter.defaultProps = {
  filters: null,
  handleChange: () => { },
}
>>>>>>> update


export default Filter;
