import './ProductDetail.scss'
import './Products.scss'
import Nav from '../Nav/Nav';
import Footer from '../../Footer/Footer';
import axios from 'axios';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../../Context/Context';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {

    const { mail, setMail, selectedProduct } = useContext(Context)
    const [loader, setLoader] = useState(false)
    
    const [currentElement, setCurrentElement] = useState(null)

    const { name, image, description, price, priceCrossedOut, category, productId } = selectedProduct

    const getMail = (e) => {
        localStorage.setItem('mail', JSON.stringify(e.target.value))
        const mail = localStorage.getItem('mail')
        console.log(mail)
    }

    const dobuy = (product) => {
        axios.post('http://localhost:8080/create_preference', {
            title: product.name,
            unit_price: product.price,
            quantity: "1"
        })
        .then((response)=>{
            console.log(response)
            window.location.href = response.data.response.body.init_point
        })
    }
   


    useEffect(()=>{
        window.scrollTo(0,0)
        setLoader(true)
        setCurrentElement(selectedProduct)
        setLoader(false)
    },[])
    


    return(
        <div className='detail'>
            <Nav />
            {loader ? (<Loader type='cube-transition' />):(<div  >    
                    <div className='detail-container'>
                        <div className='back-button'>
                            <Link to='/productlist'>Volver</Link>
                        </div>
                        <div>
                            {currentElement && (
                                <div>
                                    <div className='detail-element'>
                                        <div className='detail-img'>
                                            <img className="img-background" loading='lazy' src={`../${image}`} alt={`${image}`}/>
                                        </div>
                                        <div className='text-container'>
                                            <h2>Este es tu producto elegido</h2>
                                            <h3>{name}</h3>
                                            <p>Precio: ${price}</p>
                                            <p>{description}</p>
                                            <input type='mail' required onChange={(e)=>getMail(e)} placeholder='maruvalanianutricion@gmail.com' />
                                            <button className='buy-button' onClick={()=>dobuy(currentElement)} > Comprar <FontAwesomeIcon icon={faCartShopping} /></button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    )
}
export default ProductDetail