import React, { useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';

export default function ListProducts() {
  const [page, setPage] = useState(4);
  const [disabledMore, setDisabledMore] = useState(false);
  const [disabledLess, setDisabledLess] = useState(false);

  const {
    dataFilter,
  } = useContext(ProductsContext);

  /* funcionalidade para mostrar mais itens e se caso chegar no limite de itens ele desabilita o button */
  const showMore = () => {
    if (page === 18) {
      setDisabledMore(true);
    };
    setPage(page + 2);
    setDisabledLess(false);
  };

  /* funcionalidade para mostrar menos itens e se caso chegar no limite de itens ele desabilita o button */
  const showLess = () => {
    if (page === 4) {
      setDisabledLess(true);
    };
    setPage(page - 2);
    setDisabledMore(false)
  };

  // console.log(dataFilter);
  // console.log(data);
  return (
    <div className="flex-col justify-center items-center mt-6">
      {dataFilter.length > 0 && (
        dataFilter.slice(0, page).map((item) => (
          <div key={item.id} className="max-w-md mx-auto mt-4 mb-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex flex-col items-center justify-center">
              <div className="rounded-tl-xl rounded-b-sm h-10 flex justify-center items-center border-b-2 border-zinc-800 ">
                <h2 className="text-center truncate font-bold">{item.name}</h2>
              </div>
              <div className="md:shrink-0 mt-8">
                <img className="h-32 w-full object-cover md:h-full md:w-48" src={item.images[0].asset.url} alt={item.images[0].alt} />
              </div>
              <div className="max-w-md mx-auto p-8">
                <details className=" open:ring-gray-600 open:ring-1 p-6 rounded-lg">
                  <summary className="text-sm text-center leading-6 font-semibold select-none">
                    Description
                  </summary>
                  <div className="text-black text-justify">
                    <p>{item.shortDescription}</p>
                  </div>
                </details>
              </div>
              <div className="bg-[#de528c] w-fit text-center mx-auto rounded-lg mb-4">
                <span className="font-bold font-mono">{`Category: ${item.category.name}`}</span>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="mt-4 flex items-center justify-center">
        <button
          onClick={() => showMore()}
          disabled={disabledMore}
          className="w-28 ml-2 border-2 hover:border-white text-sm border-orange text-white rounded p-4"
        >
          Show More
        </button>
        <button
          onClick={() => showLess()}
          disabled={disabledLess}
          className="w-28 ml-2 border-2 hover:border-white text-sm border-orange text-white rounded p-4"
        >
          Show Less
        </button>
      </div>
    </div>
  );
}
