import { useContext } from "react";

import ProductsContext from "../context/ProductsContext";

export default function Buttons() {
  const {
    page,
    setPage,
    disabledLess,
    disabledMore,
    setDisabledLess,
    setDisabledMore,
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
      setDisabledMore(false);
    };
  
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => showMore()}
        disabled={disabledMore}
        className="bg-rose-500 w-28 ml-2 border-2 transition-colors disabled:opacity-75 disabled:hover:border-white hover:border-red-500 text-sm border-orange text-white rounded p-4"
      >
        Show More
      </button>
      <button
        onClick={() => showLess()}
        disabled={disabledLess}
        className="bg-rose-500 w-28 ml-2 border-2 transition-colors disabled:opacity-75 disabled:hover:border-white hover:border-red-500 text-sm border-orange text-white rounded p-4"
      >
        Show Less
      </button>
    </div>
  );
}
