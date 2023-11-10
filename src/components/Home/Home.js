import './Home.scss'
import homeimage from '../../assets/images/portada2red.png'
import VaraText from './VaraText'



const Home = () => {



    return(
        <div className="home-page" id='Home'>
            <img  className='home-image' src={homeimage} alt='welcome-image'/>
            <div className='text-page'>
                <VaraText text=" Comienza tu camino hacia el cambio!"  className='text' />
            </div>
            <div className='textMobile'>
            <p>Comienza tu camino hacia el cambio!</p>
            </div>
        </div>
    )
}

export default Home;