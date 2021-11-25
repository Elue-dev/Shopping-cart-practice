import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { CartProvider } from './context/CartContext';
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { Home } from './components/Home';

function App() {
  return (
    <CartProvider>
      <Router>
          <div className="App">
            <Nav />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
      </Router>
    </CartProvider>
  );
}

export default App;
