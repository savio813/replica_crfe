import React from 'react';
import { Animated } from 'react-animated-css';
import SlidingCard from './Card';
import './MyCarousel.css'

const MyCarousel = () => {
 
  return (
    <>
   
      <div className="" style={{ position: 'relative' }}>
    <section id="section1">

        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="https://static.cuttingroomfl.com/assets/webmvids/cyberpunk_shorter_version.webm" type="video/webm" />
        </video>

        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <h1 className='crf'>
                CRFE
            </h1>
            <p className='promos'>
                Promos, Post Production, & More
            </p>
        </div>
        
    </section>
</div>


    
        
       <SlidingCard/>
      
    
    <section id="section3">
        <div className='sectionthree'>
           <h2 className='our'> OUR SERVICES</h2>

           <h1 className='we'>
            WE BELIEVE<br/>
            CREATIVITY<br/>
            NEEDS no<br/>
            DILUTION
            </h1>   

        </div>
        </section>

        <section id="section4">
        <div className='sectionf'>
          <div className='container'>
          <p className='l'>
            LET'S FIND A REASON TO EXTEND 
          </p>
          <button className='btn'>CONTACT US TODAY</button>
          </div>
          <p className='p'>info@cuttingroom.com<br/>
          415 South Flower Street, Burbank, CA 91502<br/>
          Subscribe to the CRFE Newsletter today<br/>
          </p>
          <div className='btm'>
            <p className='e'>Email</p>
           <input className='input'/>
          
          </div>
        </div>
        </section>

    </>

  );
};

export default MyCarousel;









