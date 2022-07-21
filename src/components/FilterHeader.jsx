import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

function FilterHeader() {
  const {
    filterCategory,
    filter,
    setFilter,
  } = useContext(ProductsContext);
  

  return (
    <div>
      <form action="">
        <input type="text" />
        <select
          name="category"
          id="category"
          value={ filter }
          onChange={ ({ target }) => setFilter(target.value)}
        >
          {
            filterCategory !== undefined ? (
              filterCategory.map((item, index) => (
                <option
                  key={index}
                  value={item}>
                  {item}
                </option>
              ))
            ) : (
              <p>Loading...</p>
            )
          }
        </select>
      </form>
    </div>
  );
}

export default FilterHeader;
