import React from 'react';


//import logo from './logo.svg';
import './App.css';
const { useState } = React

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick} className = "App-header" >Press button </button>
}

function App  ()  {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }

  return (
    <div className = "App">
      <p >
        Welcome to my first app
      </p>
      <Button increment={1} onClickFunction={incrementCount}  />
      
      <p className = "Appnumber">{count}</p>
      </div>
  )
}


export default App;

