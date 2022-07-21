import ListProducts from './components/ListProducts';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <ListProducts />
    </Provider>
  );
}

export default App;
