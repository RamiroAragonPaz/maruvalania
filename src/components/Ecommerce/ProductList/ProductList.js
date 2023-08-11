import './ProductList.scss'
import pic from '../../../assets/images/_DSC6178.jpg'
import Products from './Products';
import Nav from '../Nav/Nav';
import Footer from '../../Footer/Footer'
import Loader from 'react-loaders';
import { useEffect } from 'react';


const ProdcutList = ( ) => {

    
    return(
        <div id='productList'> 
            <Nav />
            <div className="productList-page" >
                <Products />
                <Footer />
            </div>
            <Loader type='cube-transition' />
        </div>
    )
}
export default ProdcutList;