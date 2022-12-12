import React from 'react';
import '../index.css';

export default function Form() {
  return (
    <form className='form-container'>
      <label className='cardholder-name label'>
        CARDHOLDER NAME
        <input type='text' name='card-name' />
      </label>

      <label className='card-number label'>
        CARD NUMBER
        <input type='text' name='card-number' />
        {/* <p>Wrong format, numbers only!</p> */}
      </label>
      
      <div className='exp-cvc-container'>
        <label className='card-exp label'>
            EXP. DATE (MM/YY)
            <div>
                <input type='text' name='month-expiration' />
                <input type='text' name='year-expiration' />
            </div>
            {/* <p>Can't be blank!</p> */}
        </label>
        
        <label className='cvc label'>
            CVC
            <input type='text' name='cvc' />
            {/* <p>Can't be blank!</p> */}
        </label>       
      </div>
      <button>Confirm</button>
    </form>
  )
}
