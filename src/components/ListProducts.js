import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

export default function ListProducts() {
  const {
    dataFilter,
    page,
  } = useContext(ProductsContext);


  return (
    <div className="flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-2">
      {dataFilter.slice(0, page).map((item) => (
          <div key={item.id} className="border-2 md:flex flex-col items-center justify-center motion-safe:animate-fadeIn ring-1 max-w-[280px] w-80 mx-auto mt-4 max-h-fit bg-slate-300 rounded-xl shadow-lg md:max-w-2xl">
            {/* <div className="md:flex flex-col items-center justify-center"> */}
              <div className="mt-4 rounded-tl-xl rounded-b-sm h-10 flex justify-center items-center border-b-2 w-full">
                <h2 className="text-center text-black font-bold">{item.name}</h2>
              </div>
              <div className="md:shrink-0 mt-8 rounded-md flex items-center justify-center bg-contain">
                <img className="motion-safe:animate-fadeIn w-fit mx-auto mt-4 items-center object-cover ring-1 bg-white rounded-md md:w-full h-40" src={item.images[0].asset.url} alt={item.images[0].alt} />
              </div>
              <div className="max-w-[280px] w-80 sm:max-w-fit mx-auto max-h-32 p-8 mb-6">
                <details className="open:ring-1 p-6 rounded-lg">
                  <summary className="text-sm text-black font-bold text-center leading-6 select-none">
                    Description
                  </summary>
                  <div className="text-black font-bold  text-justify max-h-9">
                    <p className="text-[9px] text-ellipsis overflow-hidden">{item.shortDescription}</p>
                  </div>
                </details>
              </div>
              <div className="bg-zinc-50 w-fit text-center mx-auto rounded-lg">
                <span className="font-bold font-mono">{`Category: ${item.category.name}`}</span>
              </div>
            </div>
          // </div>
        ))}
    </div>
  );
}
