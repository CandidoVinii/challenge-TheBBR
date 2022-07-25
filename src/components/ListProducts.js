import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

export default function ListProducts() {  
  const {
    dataFilter,
    page,
  } = useContext(ProductsContext);

  return (
    <div className="motion-safe:animate-fadeIn md:grid w-fit md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-2 lg:gap-4 2xl:grid-cols-4">
      {dataFilter.slice(0, page).map((item) => (
        <div key={item.id} className=" motion-safe:animate-fadeIn bg-zinc-50 hover:bg-blue-50 transition-all delay-150 hover:shadow-md hover:shadow-rose-500 md:flex flex-col items-center justify-center ring-1 max-w-[280px] max-h-[600px] w-80 mx-auto mt-2 rounded-xl shadow-xl md:max-w-2xl">
          <div className="mt-2 rounded-tl-xl rounded-b-sm h-10 flex justify-center items-center border-b-2 w-full">
            <h2 className="text-center text-[13px] text-black font-bold font-mono">{item.name}</h2>
          </div>
          <div className="rounded-md flex items-center justify-center bg-contain">
            <img className="motion-safe:animate-fadeIn w-fit mx-auto mt-4 items-center object-cover ring-1 bg-white rounded-md md:w-full h-36" src={item.images[0].asset.url} alt={item.images[0].alt} />
          </div>
          <div className="max-w-[280px] w-80 sm:max-w-fit mx-auto max-h-32 p-8 mb-6">
            <details className=" open:ring-1 p-6 rounded-lg">
              <summary className="text-sm text-black text-center leading-6 font-semibold select-none">
                Description:
              </summary>
              <div className="text-black text-justify max-h-9">
                <p className="text-[8px] font-bold font-serif  text-ellipsis overflow-hidden">{item.shortDescription}</p>
              </div>
            </details>
          </div>
          <div className="flex justify-center items-center mt-2">
          </div>
          <div className="mt-4 mb-2 w-fit text-center mx-auto rounded-lg ring-2 ring-color-red-500 rounded0md">
            <span className="font-bold font-mono">{`Category: ${item.category.name}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
