import './Servicios.scss'
import rasberry from '../../assets/icons/pngegg.png'
import ebookImage from '../../assets/images/IMG_7733res.jpg';
import abordaje from '../../assets/images/IMG_7713res.jpg';
import planes from '../../assets/images/_DSC6182res.jpg';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { useContext } from 'react';


const Servicios = () => {

    const { setCurrCategory } = useContext(Context)

    const sendCategory = (category) => {
        setCurrCategory(category)
    }

    return(
        <div>
            <div className="servicios-page" id='Servicios'>
                <div className="text-container">
                    <h1 className='title'>¿Querés lograr tu mejor version?</h1>
                    <p className='subtitle'>Busquemos la mejor opción para el momento y proceso en el que estas hoy</p>
                    <br />
                    <p className='subtitle'>Descubrí en cada imagen tu mejor alternativa</p>
                </div>

                <div className="card-container">
                    <div className='card'>
                        <Link to={{pathname:`/productList`, hash: '#productList'}} onClick={()=>sendCategory('guias')} >
                            <img className='image-card' src={ebookImage}  alt={ebookImage}/>
                            <div className='text'>
                                <p>Ebooks</p>
                            </div>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to={`/productList`} onClick={()=>sendCategory('planes')} >
                            <img className='image-card' src={abordaje}  alt={abordaje}/>
                            <div className='text'>
                                <p>Planes Alimentarios</p>
                            </div>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to={`/productList`} onClick={()=>sendCategory('consultas')} >
                            <img className='image-card' src={planes}  alt={planes}/>
                            <div className='text'>
                                <p>Abordaje On-line</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Servicios