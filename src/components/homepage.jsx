import React from 'react'
import Navbar from './navbar';
import Hero from './herosection';
import BitAboutMe from './bitAboutMe';
const Hompage = () => {
    return ( 
        <>
          <Navbar/>
          <Hero/>
          <BitAboutMe/>
        </>
     );
}
 
export default Hompage;