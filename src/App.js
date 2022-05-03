import './App.scss';
import AddNewProduct from './components/AddNewProduct';
import Home from './components/Home';
import Product from './components/Products/Product';
import logo from './logo.svg';
import 'react-image-lightbox/style.css';



function App() {

  return (
    <div className="App">
      <header className="App-header content-left">
        <div style={{ textAlign: "center" }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Home />
      </header>
      <div className='content-right'>
        <AddNewProduct />
        <hr />
        <Product />
      </div>
    </div>
  );
}

export default App;
