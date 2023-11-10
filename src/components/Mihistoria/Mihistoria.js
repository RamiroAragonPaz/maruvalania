
import pic from '../../assets/images/IMG_7731res.jpg'
import './Mihistoria.scss'


import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'




const Mihistoria = () => {
    

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])


    return(
        <div className="about-page" id='MiHistoria'>
            <div className='img-container' data-aos="fade-up" >
                <img className='image-about' loading='lazy' src={pic} alt={pic} />
            </div>
            <div className='content-container'>
                <div className='text-container' data-aos="fade-up">
                    <h1 className='text-title'>Te cuento mi historia</h1>
                    <p className='ph'>Hola! Te quiero contar un poco sobre mí. Soy Maru Valania, nutricionista especialista en clínica, deporte y coaching en nutrición integral. Además, durante toda mi vida (y no por casualidad) estudié y ejercí como profesora de danza, instructora de pilates, masajista y reikista. Pues sí, quedarme quieta nunca fue mi estilo.</p>
                    <p className='ph'>Por qué elegí esta profesión? Soy una ex bailarina, estudiante de teatro, canto y arte. Muchas veces me encontré en la situación de estar presionada e incómoda bajo estándares de belleza y perfección injustificados, que causan hasta el día de hoy, millones de trastornos de la conducta alimentaria tanto en mujeres como en hombres. No estar conforme con mi cuerpo, que me afecte la mirada del otro y criticarme constantemente fueron (y a veces siguen siendo) mis limitantes al avance y al cambio de vida que quiero realizar.</p>
                    <p className='ph'>Comencé a estudiar nutrición, por un lado, para aprender yo misma a mejorar mi alimentación, y por otro, para poder guiar a los demás en su búsqueda de cambio y desarrollo personal, tal cual como lo necesité yo.</p>
                    <p className='ph'>No hace mucho descubrí, con mi experiencia en la atención nutricional, que no sirve focalizar solamente en cambiar nuestro cuerpo físico, ya que estamos conectados constantemente con otros niveles: el mental, el espiritual y el emocional. Aquí es donde surge mi mirada INTEGRAL. Así pude, de una manera muy gratificante, CONECTAR todos mis estudios y mis intereses, pude así descubrir mi propósito:</p>
                    <p className='special-ph ph'>Guiarte en un cambio integral, donde puedas desarrollar tu bienestar personal, en un viaje hacia tu interior para sanar cuerpo, mente, alma y espíritu.</p>
                    <p className='ph'>Así que si te animás a emprender este hermoso viaje, bienvenida! Te estaba esperando! </p>
                </div>
            </div>
        </div>
    )
}

export default Mihistoria;