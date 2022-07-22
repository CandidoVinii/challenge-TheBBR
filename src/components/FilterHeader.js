import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

export default function FilterHeader() {
  const {
    filterCategory,
    filter,
    setFilter,
    handleChange,
  } = useContext(ProductsContext);

  return (
    <div>
      <form className="flex">
        <input
          placeholder="Digite sua pesquisa aqui..."
          className="shadow appearance-none border-none rounded w-full py-2 px-3 h-8 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          type="text" />
        <select
          className="ml-4 shadow appearance-none border-none rounded w-fit py-2 px-3 h-8 text-gray-400 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="category"
          label="Select Category"
          id="category"
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        >
          <option className="text-gray-400" value="all">All</option>
          {filterCategory !== undefined && (
              filterCategory.map((item, index) => (
                <option
                  className="text-gray-400"
                  key={index}
                  value={item}>
                  {item}
                </option>
              )))}
        </select>
      </form>
    </div>
  );
}
