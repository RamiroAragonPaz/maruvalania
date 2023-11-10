import './DondeEncontrarme.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faSpa, faBrain, faDumbbell, faFlagCheckered, faArrowTrendUp} from '@fortawesome/free-solid-svg-icons'




const DondeEncontrarme = () => {


    return(
        <div className="DondeEncontrarme-page" id='DondeEncontrarme'>
            <div className='text-container' >
                <h1 className='text-title'>¿Cuáles son los pilares de este proceso de cambio{/* UALES SON LOS PILARES DE ESTE PROCESO DE CAMBIO */}?</h1>
                <div className='parragraphs'>
                    <div className='ph'>
                        <FontAwesomeIcon icon={faClockRotateLeft}  className='icon'/>
                        <h3>1. ENTENDER QUE EL PROCESO VIVIDO, TE LLEVÓ HASTA ACÁ. ABRAZÁ TU PASADO.</h3>
                    </div>
                    <div className='ph'>
                        <FontAwesomeIcon icon={faSpa} className='icon' />
                        <h3>2. APRENDER EL GRAN ABANICO DE LOS HÁBITOS, HAY MÁS PARA CAMBIAR QUE SOLO ALIMENTACIÓN Y DEPORTE.</h3>
                    </div>
                    <div className='ph'>
                        <FontAwesomeIcon icon={faBrain}  className='icon' />
                        <h3>3. CONOCER EL PODER DE LA MENTE Y LA PALABRA.  LO QUE CREES LO CREAS.</h3>
                    </div>
                    <div className='ph'>
                        <FontAwesomeIcon icon={faDumbbell}  className='icon'/>
                        <h3>4. INCORPORAR EL EJERCICIO FÍSICO COMO TU MEJOR TERAPIA.</h3>
                    </div>
                    <div className='ph'>
                        <FontAwesomeIcon icon={faFlagCheckered}  className='icon'/>
                        <h3>5. SABER QUE A LA META SE LLEGA DANDO PASOS MINÚSCULOS Y TENIENDO PACIENCIA</h3>
                    </div>
                    <div className='ph'>
                        <FontAwesomeIcon icon={faArrowTrendUp}  className='icon'/>
                        <h3>6. PODER ENCONTRAR EL DISFRUTE EN EL PROCESO. EL QUE SE FRUSTRA, PIERDE.</h3>
                    </div>


                    




 








                </div>
            </div>
        </div>
    )
}
export default DondeEncontrarme
