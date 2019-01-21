import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

<<<<<<< HEAD
const FruitBasket = ({ fruit, filters, onUpdateFilter, currentFilter }) => (
  <div className="fruit-basket">
    <Filter
      filter={filters}
      handleChange={onUpdateFilter} />
    <FilteredFruitList
      fruit={fruit}
      filter={currentFilter} />
  </div>
);
=======
const FruitBasket = props => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters} />
      <FilteredFruitList
        filter={props.currentFilter} fruit={props.fruit} />
    </div>
  );
}
>>>>>>> update

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
<<<<<<< HEAD
  currentFilter: null,
  updateFilterCallback: () => {},
};
=======
  currentFilter: [],
  updateFilterCallback: null
}
>>>>>>> update

export default FruitBasket;
