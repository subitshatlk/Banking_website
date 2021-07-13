import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/coins.mp4' autoPlay loop muted />
      <h1>Sparks Banking</h1>
      <p>Convient and easy Banking</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={'/transfer'}
        >
          Transfer Money<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;