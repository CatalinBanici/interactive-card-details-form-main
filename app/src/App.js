import Form from "./components/Form";
import Main from "./components/Main";
import { useState } from "react";

function App() {

  const [inputValues, setInputValues] = useState({
    cardholderName: '',
    cardNumber: '',
    expDate: '',
    cvc: ''
  });

  function handleChange(e) {
    setInputValues({...inputValues, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(inputValues)

  return (
    <main>
      <Main />
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </main>
    
  );
}

export default App;
