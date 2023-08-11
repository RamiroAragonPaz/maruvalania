import './Payment.scss'
import Nav from '../Nav/Nav'
import Footer from '../../Footer/Footer'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../../Context/Context'
import { Link } from 'react-router-dom'
import db from '../../../Firebase/Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('APP_USR-3f6f7774-f1ba-462f-879e-bb092f059bd0');

const Payment = () => {

    const {totalPrice, cartProducts, removeProducts} = useContext(Context)
    const [preferenceId, setPreferenceId] = useState(null);
    const [orderSuccess , setSuccesOrder] = useState(null);
    const [loading, setLoading] = useState(false)
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        age: '',
    });

    console.log(loading)

    const [order, setOrder] = useState({
        contactDetail : contactData,
        products: cartProducts,
        quantity: "1",
        total: totalPrice
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setContactData({
            ...contactData,
            [name] : value,
        })
        console.log(value, name)
        setOrder({
            ...order,
            
        })

        console.log(order)
    }

    const sendPayment = async() => {
        
        const currentOrder = {
            title: cartProducts[0].name,
            unit_price: totalPrice,
            quantity: "1"
        }

        console.log(currentOrder)
    //MercadoPago
    fetch("http://localhost:8080/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentOrder),
      })
        .then((response) => {
            setLoading(true)
            console.log(response)
            setLoading(false)
          return response.json();
        })
        .then((preference) => {
          setPreferenceId(preference.id);
        })
        .then((preferenceId)=>{
            renderCheckoutButton(preferenceId)
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(async()=>{
            /* const orderFirebase = collection(db, 'ordenes')
            const orderDoc = await addDoc(orderFirebase, order)
            setSuccesOrder(orderDoc.id);
            console.log("orden generada", orderDoc.id) */
        });

        console.log("llego")
    }; 



    const renderCheckoutButton = (preferenceId) => {
        if (!preferenceId) return null;
    
        return (
          <Wallet 
            initialization={{ preferenceId: preferenceId }}
            />
          )
      }

      useEffect(()=>{
        renderCheckoutButton(preferenceId)
      },[preferenceId])


 





    
    return(
        <div>
            <Nav />
            <div className='payment-page'>
                <div className='text-container'>
                    <div className='title-container'>
                        <h1 className='title'>Detalle final</h1>
                    </div>
                    <div className='form-container'>
                        <p className='text-form'>Completa este formulario</p>
                        <form className='form' >
                            <input type='text' name='name' placeholder='Nombre y Apellido' value={contactData.name} onChange={handleChange} required/>
                            <input type='email' name='email' placeholder='Email' value={contactData.email} onChange={handleChange} required/>
                            <input type='number' name='age' placeholder='Edad' value={contactData.age} onChange={handleChange} required/>
                        </form>
                    </div>
                    <div id="wallet_container">
                        {preferenceId ? ( 
                            <div>
                                {renderCheckoutButton(preferenceId)}
                            </div>
                            ) : (
                            <button className='buy-button'onClick={sendPayment} >Confirmar</button>
                        )}
                    </div>
                </div>
                <hr />
                <div className='product-container'>
                    {cartProducts.map((cartProduct, index)=>{
                        return(
                            <div className='product' key={index}>
                                <img className="image" src={`/${cartProduct.image}`} alt={cartProduct.name} />
                                <div className='text-resume'>
                                    <p>{cartProduct.name}</p>
                                    <p>Precio: ${cartProduct.price}</p>
                                </div>
                                <div className='remove-button'>
                                    <button className='remove' onClick={()=>{removeProducts(cartProduct)}}>X</button> 
                                </div>
                            </div>
                        )
                    })}
                    <div className='final-resume'>
                        <Link to={`/productList`}>
                                <button className='buy-button'>Seguir comprando</button>
                        </Link> 
                        <p className='total-price'>Total a pagar: ${totalPrice}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Payment 