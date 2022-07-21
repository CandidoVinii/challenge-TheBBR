import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';
import db from '../db/data.json';

function Provider ({ children }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [filter, setFilter] = useState('');
  const [categoriesFilter, setCategoriesFilter] = useState('');

  useEffect(() => {
    const dataBase = db.data.nodes;
    setData(dataBase);
  }, []);

  useEffect(() => {
    const categories = data.map(item => item.category.name);
    const filters = categories.filter((item, i) => categories.indexOf(item) === i);
    setFilterCategory(filters);
  }, [data])

  useEffect(() => {
    if(filter !== 'all') {
      const filterData = data.filter((item) => item.category.name === filter)
      setDataFilter(filterData);
    } else {
      setDataFilter([]);
    }
  }, [filter, data])
  console.log(dataFilter);
  
  const context = {
    data,
    dataFilter,
    filter,
    categoriesFilter,
    filterCategory,
    setDataFilter,
    setFilter,
    setCategoriesFilter,
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