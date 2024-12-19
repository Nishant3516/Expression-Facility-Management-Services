import React from 'react';
import './Home.css';
import heroImg from '../../assets/hero_image.jpeg';
import Services from '../../components/SectorsSection/SectorSection';
import StatsContainer from '../../components/Stats/Stats';
import Benefits from '../../components/Benefits/Benefits';
import SectorsSection from '../../components/Service/ServiceSection';
import ClientSection from '../../components/ClientSection/ClientSection';

function Home() {
  return (
    <div className='homeDiv'>
      <div style={{marginBottom:"-5px"}}>
        <img className='heroImg' src={heroImg} alt="" />
      </div>
      <div>
        <StatsContainer/>
        <SectorsSection/>
        <Benefits/>
        <Services />
        <ClientSection/>
      </div>
    </div>
  );
}

export default Home;
