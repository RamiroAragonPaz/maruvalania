import './Form.scss'
import contacto from '../../assets/images/portada4.png'


import { faInstagram, faWhatsapp, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import emailjs from'@emailjs/browser'

const Form = () => {

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_0lvw9ge',
            'template_on1a69j',
            refForm.current,
            'UT2WcUMXUFf6XlUOg'
        )
        .then(()=>{
            alert('Message successfully sent!');
                window.location.reload(false);
            },
            (erorr)=>{
                alert('Failed to send the message, please try again');
                console.log(erorr)
            }
        )
    }

    return (
        <div className='form-page' style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + contacto})`
            }} id='Contacto'>
            <div className='form-container'>
                    <div className='text-container'>
                        <p className='first-text'>SACATE TODAS LAS DUDAS</p>
                        <h1>CONTACTO</h1>
                        <p>Escribime y sacate todas las dudas enviando este formulario de contacto</p>
                        <div className='icons'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faInstagram}  /> <p>Instagram</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faWhatsapp}  /> <p>Whatsapp</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faFacebookSquare}  /> <p>Facebook</p>
                            </div>
                            </div>
                        <form className='form' ref={refForm} onSubmit={sendEmail}>
                            <input type='text' name='formName' placeholder='Nombre y Apellido' required/>
                            <input type='email' name='formEmail' placeholder='Email' required/>
                            <input type='tel' name='formPhone' placeholder='Telefono' required/>
                            <input type='text' name='formCity' placeholder='De donde sos?' required/>
                            <textarea name='formMessage' placeholder='Mensaje' required/>
                            <button type='submit' >ENVIAR  <FontAwesomeIcon icon={faPaperPlane}/></button>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Form;