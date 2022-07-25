import { useContext } from "react";
import { FaArrowCircleUp } from 'react-icons/fa';
import ProductsContext from "../context/ProductsContext";

export default function Buttons() {
  const {
    page,
    setPage,
    disabledLess,
    disabledMore,
    setDisabledLess,
    setDisabledMore,
    totalLength,
  } = useContext(ProductsContext);

  /* funcionalidade para mostrar mais itens e se caso chegar no limite de itens ele desabilita o button */
  const showMore = () => {
    if (page % 2 !== 0) {
      setPage(page + 1);
    } else {
      if (page === totalLength - 1) {
        setPage(page + 1);
        setDisabledMore(true);
      } else if (page === totalLength - 2) {
        setPage(page + 2);
        setDisabledMore(true);
      };
      setPage(page + 2);
    };
    setDisabledLess(false);
  };

  /* funcionalidade para mostrar menos itens e se caso chegar no limite de itens ele desabilita o button */
  const showLess = () => {
    if (page % 2 !== 0) {
      setPage(page - 1);
    } else {
      setPage(page - 2);
    };
    if (page === 2) {
      setPage(page - 2);
      setDisabledLess(true);
    };
    setDisabledMore(false);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => showMore()}
        disabled={disabledMore}
        className="text-white font-bold py-2 px-3 rounded-lg bg-rose-500 ml-2 border-2 disabled:opacity-75 hover:p-3 transition-all text-sm border-white disabled:py-2"
      >
        Show More
      </button>
      <button
        onClick={() => showLess()}
        disabled={disabledLess}
        className="text-white font-bold py-2 px-3 rounded-lg bg-rose-500 ml-2 border-2 disabled:opacity-75 hover:p-3 transition-all text-sm border-white disabled:py-2"
      >
        Show Less
      </button>
      <button
        onClick={scrollTop}
        disabled={disabledLess}
        className="text-white flex justify-center items-center font-bold py-2 px-2 rounded-lg bg-rose-500 border-2 disabled:opacity-75 hover:p-3 transition-all disabled:py-2"
      >
        <FaArrowCircleUp />
      </button>

    </div>
  );
}
