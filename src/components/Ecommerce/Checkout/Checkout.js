import { Context } from '../../../Context/Context';
import './Checkout.scss'
import Footer from '../../Footer/Footer';
import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'




const Checkout = () => {

    const {totalPrice,  addProducts, cartProducts, removeProducts} = useContext(Context)

    


    return(
        <div>
        <div className='checkout-page'>
            <Nav />
            {cartProducts.length < 1 ? (
            <div className='title-container'>
                <h1>Aún no tenes productos en el carrito!</h1>
                <div className='text-container'>
                    <Link to={`/productList`}>
                        <button className='buy-button'>Seguir comprando</button>
                    </Link>
                </div>
            </div>
            ):(
                <div>
                    <div className='title-container'>
                        <h2>Estos son tus productos elegidos</h2>
                    </div>
                    <div className='checkout-layout'>
                        <div className='products'>
                            <div className='headers'>
                                <p>Producto</p>
                                <p>Nombre</p>
                                <p>Valor</p>
                                <p>Eliminar</p>
                            </div>
                            <hr />
                            {cartProducts.map((cartProduct)=>{
                                return(
                                    <div>
                                        <div className='product'>
                                            <div className='image-container'>
                                                <img src={`/${cartProduct.image}`} alt={cartProduct.image} />
                                            </div>
                                            <p>{cartProduct.name}</p>
                                            <p>${cartProduct.price}</p>
                                            <div className='remove-button'>
                                                <button className='remove' onClick={()=>{removeProducts(cartProduct)}}>X</button> 
                                            </div>
                                        </div>    
                                        <hr />
                                    </div>
                                    )
                                }
                            )}
                            
                        </div>
                    </div>
                    <div className='text-container'>
                        <Link to={`/productList`}>
                            <button className='buy-button'>Seguir comprando</button>
                        </Link>
                        <div>   
                            <p>Total: ${totalPrice}</p>
                            <Link to={`/checkout/payment`} >
                                <button className='buy-button'>Pagar</button>
                            </Link>
                        </div>
                    </div>
                </div>
                )}
        </div>
        <Footer />
    </div>
    )
}
export default Checkout