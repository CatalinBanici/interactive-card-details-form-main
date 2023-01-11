import Form from "./components/Form";
import Main from "./components/Main";
import { useState } from "react";

function App() {

  const [inputValues, setInputValues] = useState('');

  function handleChange(e) {
    setInputValues({...inputValues, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(inputValues)
  

  return (
    <main>
      <Main inputValues={inputValues} />
      <Form handleChange={handleChange} handleSubmit={handleSubmit}  />
      <span>{}</span>
    </main>
    
  );
}

export default App;
