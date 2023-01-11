import React from 'react';
import '../index.css';

export default function Form(props) {

  const {handleChange, handleSubmit} = props;

  return (
    <form className='form-container' onSubmit={handleSubmit} >
      <label className='cardholder-name label'>
        CARDHOLDER NAME
        <input type='text' name='card-name' required onChange={handleChange} />
        <span className='error-message'>Can't be blank!</span>
      </label>

      <label className='card-number label'>
        CARD NUMBER
        <input type='text' name='card-number' required onChange={handleChange}  />
        <span className='error-message'>Can't be blank!</span>
        <span className='error-message-wrong'>Wrong format, numbers only!</span>
      </label>
      
      <div className='exp-cvc-container'>
        <label className='card-exp label'>
            EXP. DATE (MM/YY)
            <div>
              <input type='text' name='month-expiration' required onChange={handleChange} />
              <input type='text' name='year-expiration' required onChange={handleChange} /> 
              <span className='error-message'>Can't be blank!</span> 
            </div>
            
        </label>
        
        <label className='cvc label'>
            CVC
            <input type='text' name='cvc' required onChange={handleChange} />
            <span className='error-message'>Can't be blank!</span>
        </label>       
      </div>
      <button>Confirm</button>
    </form>
  )
}
