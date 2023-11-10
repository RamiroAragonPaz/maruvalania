
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import components

import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Ecommerce/ProductList/ProductList';
import Success from './components/Ecommerce/Success';
import ProductDetail from './components/Ecommerce/ProductList/ProductDetail';


import { ContextProvider } from './Context/Context';



function App() {

  
  return (
    <div className='app'>   
      <>
        <BrowserRouter>
        <ContextProvider>
            <Routes>
              <Route path='/' element={<Layout />}/>
              <Route path='/productlist' element={<ProductList />} />
              <Route path='/productlist/productdetail' element={<ProductDetail />} />
              <Route path='/success' element={<Success />} />
            </Routes>
            </ContextProvider>
        </BrowserRouter>
      </>
    </div>
    )
}

export default App;
