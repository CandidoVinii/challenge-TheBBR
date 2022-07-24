import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';
import db from '../db/productsCategory.json';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [filter, setFilter] = useState('all');
  const [categoriesFilter, setCategoriesFilter] = useState('');
  const [page, setPage] = useState();
  const [totalLength, setTotalLength] = useState('');
  const [disabledMore, setDisabledMore] = useState(false);
  const [disabledLess, setDisabledLess] = useState(false);

  /* monta meu db no estado*/
  useEffect(() => {
    const dataBase = db.data.nodes;
    setData(dataBase);
  }, []);

  /* filtra e seta as categorias, o filtro é para não ter categoria repetida*/
  useEffect(() => {
    const categories = data.map(item => item.category.name);
    const filters = categories.filter((item, i) => categories.indexOf(item) === i);
    setFilterCategory(filters);
  }, [data]);

  /* seta o meu estado SetDataFilter de acordo com a seleção do usuário pela categoria*/
  useEffect(() => {
    const functionFilter = () => {
      if (filter !== 'all') {
        const filterData = data.filter((item) => item.category.name === filter);
        setDataFilter(filterData);
        setTotalLength(filterData.length);
      } else {
        setDataFilter(data);
        setTotalLength(data.length);
      };
    };
    functionFilter();
  }, [data, filter]);

  /*Seta o estado do botao de acordo com a quantidade de itens no array dataFilter */
  useEffect(() => {
    if (totalLength <= 4) {
      setPage(totalLength);
      setDisabledMore(true);
      setDisabledLess(true);
    } else {
      setDisabledMore(false);
      setDisabledLess(false);
      setPage(4); 
    };
  }, [totalLength]);

  /* seta o valor digitado no input e transforma em tudo minusculo caso tenha alguma letra em caixa alta */
  const handleChange = ({ target }) => {
    setCategoriesFilter(target.value.toLowerCase());
  };

  /* filtra pelo input, caso tenha alguma categoria selecionada filtra dentro da categoria selecionada */
  useEffect(() => {
    if (categoriesFilter.length > 0) {
      const result = dataFilter.filter((item) => item.name.toLowerCase().includes(categoriesFilter));
      setDataFilter(result);
      setPage(4);
    } else if (filter !== 'all') {
      const filterData = data.filter((item) => item.category.name === filter)
      setDataFilter(filterData);
      setPage(4);
    } else {
      setDataFilter(data);
      setPage(4);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesFilter]);

  const context = {
    data,
    page,
    disabledLess,
    disabledMore,
    dataFilter,
    filter,
    categoriesFilter,
    filterCategory,
    totalLength,
    setPage,
    setDisabledLess,
    setDisabledMore,
    handleChange,
    setDataFilter,
    setFilter,
    setCategoriesFilter
  };

  return (
    <div>
      <ProductsContext.Provider value={context}>
        {children}
      </ProductsContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
