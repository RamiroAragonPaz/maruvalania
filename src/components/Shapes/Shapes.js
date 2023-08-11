import shape1 from '../../assets/images/graph.png'
import './Shapes.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'

const Shapes = ( {shape, image} ) => {


    useEffect(()=>{
        AOS.init({duration: 1200})
    },[])

    return (
        <div className='shapes-container'  >
            <div className='rigth-top-edge'data-aos="fade-down">
                <img className='shape1' src={shape} alt='shape'/>
            </div>
            <div className='right-bottom-edge' data-aos="fade-up" >
                    <img className='image-right' src={image} alt={image}  />
            </div>
        </div>
    )
}

export default Shapes;