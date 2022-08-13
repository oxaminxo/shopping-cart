import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

// Components
import Store from './components/Store';

// Context
import ProductContextProvider from './context/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='/products' element={<Store />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/*' element={<Navigate to='/products' />} />
      </Routes>
    </ProductContextProvider>
  );
};

export default App;
