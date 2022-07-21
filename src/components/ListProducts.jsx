import { useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import FilterHeader from './FilterHeader';

export default function ListProducts() {
  const [page, setPage] = useState(4);
  const [disabledMore, setDisabledMore] = useState(false);
  const [disabledLess, setDisabledLess] = useState(false);


  const {
    dataFilter,
    data
  } = useContext(ProductsContext);

  const showMore = () => {
    if(page === 18) {
      setDisabledMore(true);
    }
    setPage(page + 2);
    setDisabledLess(false);
  }

  const showLess = () => {
    if(page === 4) {
      setDisabledLess(true);
    }
    setPage(page - 2);
    setDisabledMore(false)
  }

  console.log(dataFilter);
  console.log(data);
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
      <button
        onClick={ () => showMore() }
        disabled={ disabledMore }
      >
        Show More
      </button>
      <button
        onClick={ () => showLess() }
        disabled={ disabledLess }
      >
        Show Less
      </button>
    </div>
  );
}
