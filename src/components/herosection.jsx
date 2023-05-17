import React from 'react'
import emmanuel from '../images/emmanuel.png'
const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='description'>
                    <p>Hey there, im Temilola Emmanuel</p>
                    <p>Building digital products, brands and experience</p>
                    
                    <div>
                        <p className='first'>connect with me</p>
                        <p className='second'>download my resume</p>
                    </div>
                </div>
                <div>
                    <p className='hello'> </p>
                    <p className='hello2'> </p>
                    <p className='hello3'> </p>
                    <p className='hello4'> </p>
                    <p className='hello5'> </p>
                    <p className='hello6'> </p> 
                    {/* <p className='hello7'> </p> */}
                    <p className='hello8'></p>

                </div>
                <div className='img'>
                    <img src={emmanuel} alt="" />
                </div>
            </div>

            <div className='secondDiv'>
                <div>
                    <p>200+</p>
                    <span>PROJECT COMPLETED</span>
                </div>
                
                <div>
                    <p>5+</p>
                    <span>YEARS EXPERIENCE</span>
                </div>

                <div>
                    <p>100+</p>
                    <span>HAPPY CLIENTS</span>
                </div>
            </div>
        </>
     );
}
 
export default Hero;