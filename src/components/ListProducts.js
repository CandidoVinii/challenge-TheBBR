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
    <div>
      {dataFilter.length > 0 && (
        dataFilter.slice(0, page).map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.images[0].src} alt={item.images[0].alt} />
            <p>{item.shortDescription}</p>
            <span>{item.category.name}</span>
          </div>
        ))
      )}
      <button
        onClick={() => showMore()}
        disabled={disabledMore}
      >
        Show More
      </button>
      <button
        onClick={() => showLess()}
        disabled={disabledLess}
      >
        Show Less
      </button>
    </div>
  );
}
