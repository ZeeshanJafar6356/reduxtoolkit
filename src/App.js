import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartPage from './components/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
