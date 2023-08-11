import './ProductDetail.scss'
import Nav from '../Nav/Nav';
import Footer from '../../Footer/Footer';
import { useEffect, useContext, useState} from 'react';
import { Context } from '../../../Context/Context';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../../Firebase/Firebase'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';


const ProductDetail = () => {
    const [loading, setLoading] = useState(false)
    const {selectedProduct,  addProducts, cartProducts, removeProducts} = useContext(Context)
    



    const [product, setProduct] = useState({})

    const getProduct = async() => {
        const category = selectedProduct.id
        console.log(category)
        const docRef = doc(db, 'Productos', category );
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            console.log("No such document!");
          }
    }

    const renderButton = () => {
        let duplicado = cartProducts.find(cartProduct => cartProduct.productId === product.productId)
        if (duplicado) {
            return (
                <div className='buttons-container'>
                    <p>Producto ya en el carrito</p>
                    <button className='buy-button' onClick={()=>{removeProducts(product)}}>Quitar del carrito</button>
                <Link to={`/productList`}>
                    <button className='buy-button'>Seguir comprando</button>
                </Link>
                <Link to={`/checkout`}>
                    <button className='buy-button'>Ir a pagar</button>
                </Link>
                </div>
            )            
        }
        else {
           return (
                <button className='buy-button' onClick={()=>{addProducts(product)}} id='cart-button'>AGREGAR AL CARRITO</button>
            )
        }
    }
    

    useEffect( () => {
        window.scrollTo(0, 0);
        setLoading(true)
        getProduct()
        renderButton()
        setLoading(false)
    }, [])



return(
    <div>
        <div className='productDetail-page'>
            <Nav />
            <div className='back-button'>
                <Link to={`/productList`}>
                    <p>Volver</p>
                </Link>
            </div>
            <div className='title-container'>
                    <h1 className='title'>Este es tu producto elegido</h1>
            </div>
            {!loading && (
                <div className='product-container' key={product.productId}>
                        <div className='product-image'>
                            <img className='prod-image' src={`/${product.image}`}  alt={product.image} />
                        </div>
                        <div className='product-text'>
                            <div className='text-container'>
                                <h2>{product.name}</h2>
                                <p>Precio: {product.priceCrossedOut ? (product.priceCrossedOut + " Ahora! " + product.price) : product.price} </p>
                            </div>
                        <div className='product-button'>
                            {renderButton()}
                        </div>
                    </div>
                </div>
                )
            }
            
        </div>
        
        <Footer />
        <Loader type='cube-transition' />
    </div>
    )
}
export default ProductDetail;