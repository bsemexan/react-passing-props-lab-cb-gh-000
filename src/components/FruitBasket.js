import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

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

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {},
};

export default FruitBasket;
