import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

export default function FilterHeader() {
  const {
    filterCategory,
    filter,
    setFilter,
    handleChange,
    totalLength,
  } = useContext(ProductsContext);

  return (
    <div className="max-w-2xl mx-auto">
      <form className="flex">
        <input
          placeholder="Digite sua pesquisa aqui..."
          className="focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-md border-none rounded w-full py-3 px-4 h-10 bg-slate-300 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          type="text" />
        <select
          className="focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-center ml-4 shadow appearance-none border-none rounded w-fit py-3 px-4 h-10 text-gray-800 bg-slate-300 leading-tight focus:outline-none focus:shadow-outline"
          name="category"
          label="Select Category"
          id="category"
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        >
          <option className="text-gray-800" value="all">All</option>
          {filterCategory !== undefined && (
            filterCategory.map((item, index) => (
              <option
                className="text-gray-800"
                key={index}
                value={item}>
                {item}
              </option>
            )))}
        </select>
      </form>
      <div className="motion-safe:animate-fadeInborder-2 flex justify-center md:justify-start">
        {
          totalLength === 1 ? (
            <p className="italic mt-2 text-gray-500">{`Existe o total de ${totalLength} produto`}</p>
          ) : (
            <p className="italic mt-2 text-gray-500">{`Existem o total de ${totalLength} produtos`}</p>
          )
        }
      </div>
    </div>
  );
}
