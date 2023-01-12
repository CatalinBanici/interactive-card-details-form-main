import './index.css';
import MainDesktop from './assets/images/bg-main-desktop.png';
import CardFront from './assets/images/bg-card-front.png';
import CardBack from './assets/images/bg-card-back.png';
import { useState } from "react";

function App() {

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDateM, setExpDateM] = useState('');
  const [expDateY, setExpDateY] = useState('');
  const [cvc, setCvc] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  // console.log(cardName)
  // console.log(cardNumber)
  // console.log(expDateM)
  // console.log(expDateY)
  // console.log(cvc)

  return (
    <div className='app-container'>
      <header className='header-container'>
        <img className='main-image' src={MainDesktop} alt='main' />
        <div className='card-img-container'>
          <span className='on-card-name'>{cardName}</span>
          <span className='on-card-number'>{cardNumber}</span>
          <span className='on-card-exp-m'>{expDateM}</span>
          <span className='slash'>/</span>
          <span className='on-card-exp-y'>{expDateY}</span>
          <span className='cvc-on-card'>{cvc}</span>
          {/* <span className='cvc-on-card-placeholder'>000</span> */}
          <svg className='card-logo' width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/>
            <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/>
          </svg>
          <img className='card-front' src={CardFront} alt='front card' />
          <img className='card-back' src={CardBack} alt='back card' />   
        </div>
      </header>

      <form className='form-container' onSubmit={handleSubmit} >
        <label className='cardholder-name label'>
          CARDHOLDER NAME
          <input 
            className='input-cardholder-name'
            type='text' 
            name='card-name' 
            required 
            placeholder='e.g. Jane Appleseed'
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}  />
          <span className='error-message'>Can't be blank!</span>
        </label>

        <label className='card-number label'>
          CARD NUMBER
          <input 
            className='input-card-number'
            type='text' 
            name='card-number' 
            required 
            placeholder='e.g. 1234 5678 9123 0000'
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}  />
          <span className='error-message'>Can't be blank!</span>
          <span className='error-message-wrong'>Wrong format, numbers only!</span>
        </label>
        
        <div className='exp-cvc-container'>
          <label className='card-exp label'>
              EXP. DATE (MM/YY)
              <div>
                <input 
                  className='input-exp-date-m'
                  type='text' 
                  name='month-expiration' 
                  required 
                  placeholder='MM'
                  value={expDateM}
                  onChange={(e) => setExpDateM(e.target.value)} />
                <input 
                  className='input-exp-date-y'
                  type='text' 
                  name='year-expiration' 
                  required 
                  placeholder='YY'
                  value={expDateY}
                  onChange={(e) => setExpDateY(e.target.value)} /> 
                <span className='error-message error-msg-exp'>Can't be blank!</span> 
              </div>
              
          </label>
          
          <label className='cvc label'>
              CVC
              <input
                className='input-cvc'
                type='text' 
                name='cvc' 
                required 
                placeholder='123'
                value={cvc}
                onChange={(e) => setCvc(e.target.value)} />
              <span className='error-message'>Can't be blank!</span>
          </label>       
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
