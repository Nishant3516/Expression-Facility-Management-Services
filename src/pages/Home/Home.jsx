import React from 'react';
import './Home.css';
import heroImg from '../../assets/hero_image.jpeg';
import Services from '../../components/Services/Services';

function Home() {
  return (

    <div className='homeDiv'>
      <div>
        <img className='heroImg' src={heroImg} alt="" />
      </div>
      <div className="home">
        <h1>Welcome to Expression</h1>
        <p>Your creativity, our canvas.</p>
      </div>
      <div>
        <Services />
      </div>
    </div>


  );
}

export default Home;
