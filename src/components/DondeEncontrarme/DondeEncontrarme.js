import './DondeEncontrarme.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faSpa, faBrain} from '@fortawesome/free-solid-svg-icons'




const DondeEncontrarme = () => {


    return(
        <div className="DondeEncontrarme-page" id='DondeEncontrarme'>
            <div className='text-container' >
                <h1 className='text-title'>¿Cuáles son los pilares de este proceso de cambio{/* UALES SON LOS PILARES DE ESTE PROCESO DE CAMBIO */}?</h1>
                <div className='parragraphs'>
                    <div className='ph'>
                        <FontAwesomeIcon icon={faClockRotateLeft}  className='icon'/>
                        <h3>1. ENTENDER QUE EL PROCESO VIVIDO, TE LLEVÓ HASTA ACÁ. ABRAZÁ TU PASADO. </h3>
                        <p>La mayoría de mis pacientes suelen llegar a las consultas luego de haber realizado muchas dietas a lo largo de su vida, se sienten cansados y frustrados por no haber podido llegar al objetivo. Pero lo MEJOR o lo MAS IMPORTANTE que rescato, es que, si esas dietas o intentos frustrados no hubieran estado, tal vez nunca hubieran decidido encarar un cambio desde un lugar más profundo, desde la raíz y así, poder sanar su relación con ellas mismas, con su entorno y por ende, con la comida.</p>
                    </div>
                    <div className='ph'>
                        <FontAwesomeIcon icon={faSpa} className='icon' />
                        <h3>2. CONOCER EL GRAN ABANICO DE LOS HÁBITOS</h3>
                        <p>Cuando decimos “quiero cambiar mis hábitos” no nos referimos solamente a comer mejor o a entrenar un poco más, sino también a:</p>
                            <p className='ph-list'>Mejorar la calidad de mi sueño.</p>
                            <p className='ph-list'>Hablarme de una mejor manera</p>
                            <p className='ph-list'>Cambiar la forma en la que me manejo ante determinada situación.</p>
                            <p className='ph-list'>conocer mis emociones y gestionarlas.</p>
                            <p className='ph-list'>Practicar el autocuidado.</p>
                            <p className='ph-list'>Meditar o realizar yoga.</p>
                    </div>
                    <div className='ph'>
                        <FontAwesomeIcon icon={faBrain}  className='icon' />
                        <h3>3. LO QUE CREES LO CREAS</h3>
                        <p>Nuestro cuerpo no diferencia lo que ocurre en sus 4 niveles. Si TU MENTE CREE que no vas a poder llegar a tu objetivo TU CUERPO lo CREA.
                        Si no revisamos nuestras creencias limitantes (esas que pueden estar de base o tal vez adquiridas por tu entorno en algún momento de tu vida) nuestro cuerpo no va a lograr avanzar hacia el objetivo y vas a trastabillarte una y mil veces con la misma piedra.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DondeEncontrarme
