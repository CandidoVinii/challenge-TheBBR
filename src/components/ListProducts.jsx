import { useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import FilterHeader from './FilterHeader';

export default function ListProducts() {
  const [page, setPage] = useState(4);

  const {
    dataFilter,
    data
  } = useContext(ProductsContext);

  console.log(dataFilter);
  return (
    <div>
      <FilterHeader/>
      {dataFilter.length > 0 ? (
        dataFilter.slice(0, page).map((item) => (
          <div key={ item.id }>
            <img src={ item.images[0].src } alt={ item.images[0].alt } />
            <h1>{ item.name }</h1>
            <p>{ item.shortDescription }</p>
          </div>
        ))
      ) : (
        data.slice(0, page).map((item) => (
          <div key={ item.id }>
          <img src={item.images[0].src} alt={item.images[0].alt} />
          <h1>{ item.name }</h1>
          <p>{ item.shortDescription }</p>
        </div>
        ))
      )}
      <button onClick={ () => setPage(page + 2)}>Show More</button>
    </div>
  );
}
