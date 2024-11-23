import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/cart/:id" element={ <Cart /> } />
          <Route path="*" element={  <PageNotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;