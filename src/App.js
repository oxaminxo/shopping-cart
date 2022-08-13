import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

// Components
import Store from './components/Store';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';
import ShopingCart from './components/ShopingCart';

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/cart' element={<ShopingCart />} />
          <Route path='/products' element={<Store />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
