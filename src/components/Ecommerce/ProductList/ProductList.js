import './ProductList.scss'
import pic from '../../../assets/images/IMG_7738res.jpg'
import Products from './Products';
import Nav from '../Nav/Nav';
import Footer from '../../Footer/Footer'
import Loader from 'react-loaders';
import { useRef } from 'react';


const ProdcutList = ( ) => {

    const myRef = useRef(null);

    const handleClick = () => {
        window.scrollTo(0, 650)
          };
    
    return(
        <div id='productList'> 
            <Nav />
            <div className="productList-page" >
                <div className='home-container'>
                    <div className='left-side'>
                        <img src={pic} loading='lazy' alt='Maru Valania Nutrición' />
                    </div>
                    <div className='right-side'>
                        <h2>Encuentra la mejor opción que se adapte a tus necesidades para comenzar tu cambio</h2>
                        <button className='button-more' onClick={handleClick}>Ver Mas</button>
                    </div>
                </div>
                    <Products ref={myRef}/>
                <Footer />
            </div>
            <Loader type='cube-transition' />
        </div>
    )
}
export default ProdcutList;