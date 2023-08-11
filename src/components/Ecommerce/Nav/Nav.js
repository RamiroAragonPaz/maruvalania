import './Nav.scss'

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircle } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useContext, useState} from 'react';
import { Context } from '../../../Context/Context';

const Nav = () => {

    const {selectedProduct,  addProducts, cartProducts} = useContext(Context)

    return(
        <div className='nav2-container'>
            <div className='nav-bar'>
                <NavLink className='logo' to='/productlist'>
                    <p>Maru Valania Store</p>
                </NavLink>
            </div>
            <nav className='links'>
                <NavLink exact='true' activeclassname="active" to='/'>
                    <p>IR AL SITIO</p>
                </NavLink>
                 <NavLink exact='true' activeclassname="active" className='portfolio-link' to='/checkout'>
                        <div className='cart'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <p className='cart-text'>{cartProducts.length}</p>
                        </div>
                </NavLink>
            </nav>
        </div>
    )
}
export default Nav;