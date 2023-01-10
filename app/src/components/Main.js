import React from 'react'
import MainDesktop from '../assets/images/bg-main-desktop.png';
import CardFront from '../assets/images/bg-card-front.png';
import CardBack from '../assets/images/bg-card-back.png';
import '../index.css';

export default function Main(props) {



  return (
    <header className='header-container'>
        <img className='main-image' src={MainDesktop} alt='main' />
        <div className='card-img-container'>
            <img className='card-front' src={CardFront} alt='front card' />
            <img className='card-back' src={CardBack} alt='back card' />   
        </div>
    </header>
  )
}
