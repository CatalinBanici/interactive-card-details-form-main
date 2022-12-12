import React from 'react';
import '../index.css';

export default function Form() {
  return (
    <form className='form-container'>
      <label className='cardholder-name'>
        Cardholder Name
        <input type='text' name='card-name' />
      </label>
      <label className='card-number'>
        Card Number
        <input type='text' name='card-number' />
      </label>
      <div className='exp-cvc-container'>
        <label className='card-exp'>
            exp. date (mm/yy)
            <div>
                <input type='text' name='month-expiration' />
                <input type='text' name='year-expiration' />
            </div>
        </label>
        <label className='cvc'>
            cvc
            <input type='text' name='cvc' />
        </label>
      </div>
      <button>Confirm</button>
    </form>
  )
}
