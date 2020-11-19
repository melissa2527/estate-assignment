import Header from './Components/Header.jsx';
import EstateList from './Components/EstateList';
import './scss/index.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <EstateList />
    </div>
  );
}

export default App;
