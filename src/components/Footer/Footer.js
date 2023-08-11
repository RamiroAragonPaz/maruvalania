import './Footer.scss'
import Navlogo from '../../assets/icons/Nav-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer-page">
            <div className='footer-content'>
                <div className='links'>
                    <a href='#MiHistoria'>
                        <p>Mi historia</p>
                    </a>
                    <a href='#Servicios'>
                        <p>Comenzá ya</p>
                    </a>
                    <a href='#Contacto'>
                        <p>Contacto</p>
                    </a>
                </div>
                <hr />
                <div className='img-container'>
                    <a href='/#Home'>
                        <img src={Navlogo} alt={Navlogo} />
                        <p>Marianela Valania</p>
                        <p className='last'>NUTRICIONISTA</p>
                    </a>
                </div>
                <hr />
                <div className='final-column'>
                    <a>
                        <p>Mi CV</p>
                    </a>
                    <a href='https://www.linkedin.com/in/marianela-valania/' target='_blank'>
                        <p>LinkedIn</p>
                    </a>
                    <Link to={'/productList'} >
                        <p>Tienda</p>
                    </Link>
                </div>
            </div>
            <div className='footer-last'>

                <p>&copy;2023 - Marianela Valania</p>
                <p>Diseño y desarrollo Web: Ramiro Aragón Paz </p>
            </div>
        </div>
    )
}
export default Footer