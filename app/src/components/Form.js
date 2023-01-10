import React from 'react';
import '../index.css';

export default function Form(props) {

  const {handleChange, handleSubmit} = props;

  return (
    <form className='form-container' onSubmit={handleSubmit} >
      <label className='cardholder-name label'>
        CARDHOLDER NAME
        <input type='text' name='card-name' onChange={handleChange} />
      </label>

      <label className='card-number label'>
        CARD NUMBER
        <input type='text' name='card-number' onChange={handleChange} />
        {/* <p>Wrong format, numbers only!</p> */}
      </label>
      
      <div className='exp-cvc-container'>
        <label className='card-exp label'>
            EXP. DATE (MM/YY)
            <div>
                <input type='text' name='month-expiration' onChange={handleChange} />
                <input type='text' name='year-expiration' onChange={handleChange} />
            </div>
            {/* <p>Can't be blank!</p> */}
        </label>
        
        <label className='cvc label'>
            CVC
            <input type='text' name='cvc' onChange={handleChange} />
            {/* <p>Can't be blank!</p> */}
        </label>       
      </div>
      <button>Confirm</button>
    </form>
  )
}
