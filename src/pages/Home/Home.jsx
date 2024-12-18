import React from 'react';
import './Home.css';
import heroImg from '../../assets/hero_image.jpeg';
import Services from '../../components/Services/Services';
import StatsContainer from '../../components/Stats/Stats';
import Benefits from '../../components/Benefits/Benefits';

function Home() {
  return (
    <div className='homeDiv'>
      <div>
        <img className='heroImg' src={heroImg} alt="" />
      </div>
      <div>
        <StatsContainer/>
        <Services />
        <Benefits/>
      </div>
    </div>
  );
}

export default Home;
