import { useEffect, useState } from 'react';
import db from '../db/data.json';

export default function ListProducts() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(db);
  }, []);

  console.log(data);
  return (
    <h1>Olá</h1>
  );
}
