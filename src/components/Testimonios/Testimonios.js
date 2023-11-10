import './Testimonios.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import Tests from './testimonios.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination} from 'swiper/modules'
import background from '../../assets/images/portadares.png'
import pic from '../../assets/images/IMG_7590res.jpg'
;

const Testimonios = () => {

    const data = Tests;

    
    
    return(
        <div className="testimonios-page">
            <div className='background-container'>
                <img className='background' src={background} alt='phone'/>
            </div>
            <div className='elements-container'>
                <div className='text-container'>
                    <h1 className='title'>Ellos ya se animaron a cambiar sus habitos!</h1>
                    <p>Ahora es el momento de que vos tambien lo hagas!</p>
                </div>
                <div className='swiper-container'>
                    <Swiper 
                        pagination={{    
                            clickable: true,
                            dynamicBullets: true,
                            }}
                        modules={[Pagination]}
                        className='swiper-place'
                    >   
                        {data.map((test,index)=>{
                            return(
                                <SwiperSlide key={index} className='swiper-slide'>
                                        <p className='title'>{test.name}</p>
                                        <p className='age'>{test.place}</p>
                                        <div className='testimony-container'>
                                            <p>"{test.testimony}"</p>
                                        </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Testimonios;