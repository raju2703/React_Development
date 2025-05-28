import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter] = useState(0)
 
  // let counter = 15
  const addValue=()=>{
    console.log("click",counter)
  //  counter = counter + 1
  setCounter(counter + 1)
  }
  const removeValue=()=>{
    console.log('click',counter)
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button 
      onClick={removeValue}>decrease value {counter}</button>
    </>
  )
}

export default App
