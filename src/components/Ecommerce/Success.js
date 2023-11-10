import { useEffect } from "react"
import Nav from "./Nav/Nav";
import Footer from "../Footer/Footer";
import Loader from 'react-loaders';
import axios from "axios";
import { Link } from "react-router-dom";
import './Success.scss'
import { useContext } from "react";
import { Context } from '../../Context/Context';


const Success = () => {

    const { mail } = useContext(Context)

    const sendproduct = async() => {
        const address = JSON.parse(localStorage.getItem('mail'))
        axios.post('http://localhost:8080/success', {mail: address})
        .then((response)=>{
            localStorage.clear()
            console.log(response)
        })   
    }

    
    useEffect(()=>{
        sendproduct();
    },[])

    
    return(
        <div>
            <div className="success-page">
                <Nav />
                <div className="text-container">
                    <div>
                    <h1>Gracias por tu compra</h1>
                    <p>En breve recibiras un mail con tu producto!</p>
                    <p>Ante cualquier consulta no dudes en enviarme un mail a info@maruvalanianutricion.com</p>
                    <p>o un whatsapp al +54922150123123</p>
                    <Link to='/' >Volver</Link>
                    </div>
                </div>
                <Footer />
            </div>
            <Loader type='cube-transition' />
        </div>
    )
}

export default Success