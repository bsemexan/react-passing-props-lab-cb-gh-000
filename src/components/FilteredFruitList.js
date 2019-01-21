import React from 'react';

<<<<<<< HEAD
const FilteredFruitList = (props) => {
=======
const FilteredFruitList = props => {
>>>>>>> update
  const list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);

  return (
    <ul className="fruit-list">
<<<<<<< HEAD
      {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
=======
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  filter: [],
  fruit: []
>>>>>>> update
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null,
};

export default FilteredFruitList;
