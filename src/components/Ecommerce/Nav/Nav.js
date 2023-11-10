import './Nav.scss'

import { NavLink } from 'react-router-dom'

import { useEffect, useContext, useState} from 'react';
import { Context } from '../../../Context/Context';

const Nav = () => {

    const {selectedProduct,setCurrCategory,  addProducts, cartProducts} = useContext(Context)


    const changeCategory = (e) => {
        window.scrollTo(0, 650)
        setCurrCategory(e.target.value)
    }


    return(
        <div className='nav2-container'>
            <div className='nav-bar'>
                <NavLink className='logo' to='/productlist'>
                    <p>Maru Valania Store</p>
                </NavLink>
            </div>
            <div className='filters'>
                <button className='btn' onClick={(e)=>changeCategory(e)} value="guias">E-BOOKS</button>
                <button className='btn' onClick={(e)=>changeCategory(e)} value="planes" > PLANES</button>
                <button className='btn' onClick={(e)=>changeCategory(e)} value="Combos" >COMBOS</button>
                <button className='btn' onClick={(e)=>changeCategory(e)} value="" > TODOS</button>
            </div>
            <nav className='links'>
                <NavLink exact='true' activeclassname="active" to='/'>
                    <p>IR AL SITIO</p>
                </NavLink>
            </nav>
        </div>
    )
}
export default Nav;