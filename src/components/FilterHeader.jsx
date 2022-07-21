import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

function FilterHeader() {
  const {
    filterCategory,
    filter,
    setFilter,
    handleChange,
  } = useContext(ProductsContext);

  return (
    <div>
      <form action="">
        <input onChange={handleChange} type="text" />
        <select
          name="category"
          id="category"
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        >
          <option value="all">All</option>
          {
            filterCategory !== undefined && (
              filterCategory.map((item, index) => (
                <option
                  key={index}
                  value={item}>
                  {item}
                </option>
              ))
            )
          }
        </select>
      </form>
    </div>
  );
}

export default FilterHeader;
