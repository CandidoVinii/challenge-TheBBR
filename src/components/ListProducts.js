import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

export default function ListProducts() {
  const {
    dataFilter,
    page,
  } = useContext(ProductsContext);

  // console.log(dataFilter);
  // console.log(data);
  return (
    <div className="flex-col justify-center items-center mt-6 md:grid md:grid-cols-2 md:gap-2">
      {dataFilter.length > 0 && (
        dataFilter.slice(0, page).map((item) => (
          <div key={item.id} className="ring-red-400 ring-1 max-w-sm w-80 mx-auto mt-4 max-h-fit bg-zinc-900 rounded-xl shadow-md md:max-w-2xl">
            <div className="md:flex flex-col items-center justify-center">
              <div className="mt-4 rounded-tl-xl rounded-b-sm h-10 flex justify-center items-center border-b-2 w-full border-red-400">
                <h2 className="text-center text-white font-bold">{item.name}</h2>
              </div>
              <div className="md:shrink-0 mt-8 rounded-md flex items-center justify-center">
                <img className="w-fit object-cover ring-1 bg-white  ring-red-400 rounded-md md:w-full h-40" src={item.images[0].asset.url} alt={item.images[0].alt} />
              </div>
              <div className="w-80 mx-auto max-h-32 p-8 mb-6">
                <details className=" open:ring-red-400 open:ring-1 p-6 rounded-lg">
                  <summary className="text-sm text-white text-center leading-6 font-semibold select-none">
                    Description
                  </summary>
                  <div className="text-white text-justify max-h-9">
                    <p className="text-[10px] text-ellipsis overflow-hidden">{item.shortDescription}</p>
                  </div>
                </details>
              </div>
              <div className="bg-red-400 w-fit text-center mx-auto rounded-lg">
                <span className="font-bold font-mono">{`Category: ${item.category.name}`}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
