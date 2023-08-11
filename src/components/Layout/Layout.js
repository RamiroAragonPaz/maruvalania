import './Layout.scss'

import Loader from 'react-loaders';


import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'
import Mihistoria from '../Mihistoria/Mihistoria'
import DondeEncontrarme from '../DondeEncontrarme/DondeEncontrarme'
import Servicios from '../Servicios/Servicios';
import Testimonios from '../Testimonios/Testimonios';
import Divisor from '../Divisor/Divisor';
import Form from '../Contacto/Form';
import Footer from '../Footer/Footer';



const Layout = () => {
    

    return(
        <div className="layout">
            <Navbar />
            <Home />
            <Mihistoria />
            <Servicios />
            <DondeEncontrarme />
            <Testimonios />
            <Divisor />
            <Form />
            <Footer />
            <Loader type='cube-transition' />
        </div>
    )
}
export default Layout