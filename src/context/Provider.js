import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';
import db from '../db/data.json';

function Provider ({ children }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [filter, setFilter] = useState('');
  const [categoriesFilter, setCategoriesFilter] = useState('');

  useEffect(() => {
    setData(db);
  }, []);

  const handleChange = ({ target }) => {
    setCategoriesFilter(target.value.toLowerCase());
  };

  const context = {
    data,
    dataFilter,
    filter,
    categoriesFilter,
    setDataFilter,
    setFilter,
    setCategoriesFilter,
    handleChange,
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