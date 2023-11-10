import { collection, getDocs } from 'firebase/firestore';
import db from '../../../Firebase/Firebase';
import { useEffect, useState, useContext } from 'react';
import { Context } from '../../../Context/Context';
import './Products.scss'
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

const Products = () => {
    
    const [loader, setLoader] = useState(false)
    const [products, setProducts] = useState([])
    const { setSelectedProduct, setCurrCategory, currCategory } = useContext(Context)

    const getProducts = async () => {
        const itemsCollection = collection( db, 'Productos' )
        const productSnapshot = await getDocs(itemsCollection)
        const productList = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
            }
        )
        return productList
    }
                 
    const filterProductByCategory = (products, category) => {
        return products.map((product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
            return products
        })
    }     

    useEffect(()=>{
        setLoader(true);
        setSelectedProduct("")
        setProducts([]);
        getProducts()
         .then((products)=>{
            currCategory ? filterProductByCategory(products, currCategory) : setProducts(products);
        })

        setLoader(false)
    }, [currCategory])



    return(
        <div>
            <div className='ecommerce-layout'>
                <div className='card-container'>
                    { loader ? (
                        <Loader type='cube-transition' />
                    ) : (
                        products.map((product, index)=>{
                            const { name, image, description, price, priceCrossedOut, category, productId } = product
                            return(
                                <div key={index} className='card' id={name}>        
                                    <div className='card-background-container'>
                                        <div className='card-background-content'>
                                            <img className={`img-background ${(productId== 'plan99') ? "blurred" : "" }`} src={`./${image}`} alt={`${image}`}/>
                                        </div>
                                    </div>
                                    <div className='text-container'>
                                        <div className='text'>
                                            <p className='title'>{name}</p>
                                            <p>Precio: {priceCrossedOut ? (priceCrossedOut + " Ahora! " + price) : price} </p>
                                            <p>{description}</p>
                                            {(productId == 'plan99') ? (
                                                <button className='buy-button' onClick={()=>setCurrCategory("")} > Ver Mas Productos </button>
                                            ) : (
                                                <Link to='/productlist/productdetail'><button className='buy-button' onClick={()=>setSelectedProduct(product)}  > Lo Quiero! </button></Link>
                                                ) 
                                            }
                                            </div>
                                    </div>
                                </div>
                                )
                            })
                        )  
                    }
                </div>
            </div>
        </div>
    )
}

export default Products;