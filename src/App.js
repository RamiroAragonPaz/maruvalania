
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import components

import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Ecommerce/ProductList/ProductList';
import ProductDetail from './components/Ecommerce/ProductDetail/ProductDetail';
import Checkout from './components/Ecommerce/Checkout/Checkout';
import Payment from './components/Ecommerce/Payment/Payment';
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
              <Route path='/productdetail/:category/:id' element={<ProductDetail />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/checkout/payment' element={<Payment />} />
            </Routes>
            </ContextProvider>
        </BrowserRouter>
      </>
    </div>
    )
}

export default App;
