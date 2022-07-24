import Provider from './context/Provider';
import MainScreen from './pages/MainScreen';

function App() {
  return (
    <Provider>
      <MainScreen/>
    </Provider>
  );
}

export default App;
