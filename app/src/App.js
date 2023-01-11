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

  console.log(cardName)
  console.log(cardNumber)
  console.log(expDateM)
  console.log(expDateY)
  console.log(cvc)

  return (
    <div className='app-container'>
      <header className='header-container'>
        <img className='main-image' src={MainDesktop} alt='main' />
        <div className='card-img-container'>
            <img className='card-front' src={CardFront} alt='front card' />
            <img className='card-back' src={CardBack} alt='back card' />   
        </div>
      </header>

      <form className='form-container' onSubmit={handleSubmit} >
        <label className='cardholder-name label'>
          CARDHOLDER NAME
          <input 
            type='text' 
            name='card-name' 
            required 
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}  />
          <span className='error-message'>Can't be blank!</span>
        </label>

        <label className='card-number label'>
          CARD NUMBER
          <input 
            type='text' 
            name='card-number' 
            required 
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
                  type='text' 
                  name='month-expiration' 
                  required 
                  value={expDateM}
                  onChange={(e) => setExpDateM(e.target.value)} />
                <input 
                  type='text' 
                  name='year-expiration' 
                  required 
                  value={expDateY}
                  onChange={(e) => setExpDateY(e.target.value)} /> 
                <span className='error-message'>Can't be blank!</span> 
              </div>
              
          </label>
          
          <label className='cvc label'>
              CVC
              <input
                type='text' 
                name='cvc' 
                required 
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
