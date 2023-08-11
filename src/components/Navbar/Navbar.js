import './Navbar.scss'

import Navlogo from '../../assets/icons/Nav-logo.png'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return(
        <div className='nav-container'>
            <div className='nav-bar'>
                <a className='logo' href='/'>
                    <img src={Navlogo} alt='Nav Logo' className='logo-image' />
                </a>
            </div>
            <nav className='links'>
                <NavLink exact='true' activeclassname="active" to='/'>
                    <p>INICIO</p>
                </NavLink>
                <NavLink exact='true' activeclassname="active" className='ecommerce-link' to='/productlist'>
                    <p>TIENDA</p>
                </NavLink>
            </nav>
        </div>
    )
}
export default Navbar;