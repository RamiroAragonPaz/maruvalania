import { collection, getDocs } from 'firebase/firestore';
import db from '../../../Firebase/Firebase';
import { useEffect, useState, useContext } from 'react';
import { Link} from 'react-router-dom';
import { Context } from '../../../Context/Context';
import './Products.scss'

const Products = () => {
    
    const [loader, setLoader] = useState(false)
    
    const [products, setProducts] = useState([])
    const { setSelectedProduct, setCurrCategory, currCategory } = useContext(Context)
    console.log(currCategory)

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

    const changeCategory = (e) => {
        setCurrCategory(e.target.value)
    }

    const filterProductByCategory = (products, category) => {
        return products.map((product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
            return products
        })
    }

    const selectedProduct = (product) => {
        setSelectedProduct(product)
    }

    useEffect(()=>{
        setLoader(true);
        setProducts([]);
        getProducts()
         .then((products)=>{
            currCategory ? filterProductByCategory(products, currCategory) : setProducts(products);
        })
         setLoader(false)
         console.log(products)
    }, [currCategory])

    return(
        <div>
            <div className="title-container" >
                <div className='title'>
                    <h2>Estos son mis productos destacados</h2>
                </div>
                <h3>Adquiri el tuyo y comenza una vida saludable!</h3>
            </div>
            <hr/>
            <div className='ecommerce-layout'>
                <div className='filters'>
                <h3>Categorías</h3>
                    <button onClick={(e)=>changeCategory(e)} value="guias">GUIAS</button>
                    <button onClick={(e)=>changeCategory(e)} value="planes" > PLANES</button>
                    <button onClick={(e)=>changeCategory(e)} value="Combos" >COMBOS</button>
                    <button onClick={(e)=>changeCategory(e)} value="" > TODOS</button>
                </div>
                <hr className='bar'/>
                <div className='card-container'>
                    {loader ? "" : (products.map((product, index)=>{
                        const { name, image, description, price, priceCrossedOut, category, productId } = product
                        console.log(category)
                        return(
                            <div key={index} className='card'>
                                <div className='img-container'>
                                    <img src={`./${image}`} alt={`${image}`}/>
                                </div>
                                <p>{name}</p>
                                <p>Precio: {priceCrossedOut ? (priceCrossedOut + " Ahora! " + price) : price} </p>
                                <p>{description}</p>
                                <Link to={`/productdetail/${category}/${productId}`} >
                                    <button className='buy-button' onClick={()=>selectedProduct(product)}>Ver Mas</button>
                                </Link>
                            </div>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}

export default Products;