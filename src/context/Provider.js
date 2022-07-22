import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';
import db from '../db/data.json';

function Provider ({ children }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [filter, setFilter] = useState('all');
  const [categoriesFilter, setCategoriesFilter] = useState('');

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
    if(filter !== 'all') {
      const filterData = data.filter((item) => item.category.name === filter)
      setDataFilter(filterData);
    } else {
      setDataFilter(data);
    };
  }, [filter, data]);
  
  /* seta o valor digitado no input e transforma em tudo minusculo caso tenha alguma letra em caixa alta */
  const handleChange = ({ target }) => {
    setCategoriesFilter(target.value.toLowerCase());
  };

  /* filtra pelo input, caso tenha alguma categoria selecionada filtra dentro da categoria selecionada */
  useEffect(() => {
    if(categoriesFilter.length > 0) {
      const result = dataFilter.filter((item) => item.name.toLowerCase().includes(categoriesFilter));
      setDataFilter(result);
    } else {
      const filterData = data.filter((item) => item.category.name === filter)
      setDataFilter(filterData);
    };
  }, [categoriesFilter]);
  
  const context = {
    data,
    dataFilter,
    filter,
    categoriesFilter,
    filterCategory,
    handleChange,
    setDataFilter,
    setFilter,
    setCategoriesFilter
  };

  return (
    <div>
      <ProductsContext.Provider value={ context }>
        {children}
      </ProductsContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;