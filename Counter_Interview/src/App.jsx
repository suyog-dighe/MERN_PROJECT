import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addValue(){
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    //here is interview question when we add multiple same counter value like
    // above then it was increase or not
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  const removeValue = () => {
    // setCount(count - 1)
    // setCount(count - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
     
    
    
  }

  return (
    <>
      <h1>Hello Suyog</h1>
      <h3>counter :{count} </h3>
      <button onClick={addValue}>Add</button>
      <br></br>
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App
