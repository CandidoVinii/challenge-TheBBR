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

  useEffect(() => {
    const dataBase = db.data.nodes;
    setData(dataBase);
  }, []);

  useEffect(() => {
    const categories = data.map(item => item.category.name);
    const filters = categories.filter((item, i) => categories.indexOf(item) === i);
    setFilterCategory(filters);
  }, [data]);

  useEffect(() => {
    if(filter !== 'all') {
      const filterData = data.filter((item) => item.category.name === filter)
      setDataFilter(filterData);
    } else {
      setDataFilter(data);
    };
  }, [filter, data]);
  
  const handleChange = ({ target }) => {
    setCategoriesFilter(target.value.toLowerCase());
  };

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