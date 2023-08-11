import './Contacto.scss'
import pic from '../../assets/images/IMG_7722.JPG'






const Contacto = () => {






    return(
        <div className='contacto-page' id='Contacto'>
            <div className='social-container'>
                <div className='img-container'>
                    <img className='img-social-media' src={pic} alt={pic} />
                </div>
                <div className='text-container' >
                    <h1 className='text-title'>No te olvides de seguime en mis redes sociales!</h1>
                    <div className='text'>
                        <p>No te pierdas nada de mi contenido en mis redes!</p>
                        <p>Seguime y enterate todo al instante!</p>
                        <p>Veni ya a formar parte de esta comunidad!</p>
                    </div>
                        
                </div>
            </div>
            </div>
    )
}

export default Contacto;