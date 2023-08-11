import './Divisor.scss'
import image from '../../assets/images/divisor3.png'
import { Link } from 'react-router-dom'

const Divisor = () => {
    return (
        <div className='div1' >
                <img src={image} alt={image} />
                <div className='content-container'>
                    <div className='text-container'>
                        <p className='title'>INGRESA AHORA MISMO A MI TIENDA</p>
                        <p className='text'>Vas a poder encontrar todas las opciones para empezar tu cambio saludable hoy mismo!</p>
                    </div>
                    <div className='button-container'>
                        <Link to={`/productList`}>
                            <button className='buy-button'>TIENDA</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}
export default Divisor