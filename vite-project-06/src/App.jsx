import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <ControlledInput/>
      <br/>
      <br/>
      <UseReftInput/>
      <br/>
      <br/>
      <Counter/>
    </>
  )
}

export default App

const UseReftInput=()=>{
  const inputRef = useRef(null)
  const getInputValue = ()=>{
    console.log(inputRef.current.value)
  }
  const focusInput = () => {
    inputRef.current.focus()
  }
  return (
  <>
      <input ref={inputRef}/>
      <button onClick={(getInputValue)}>input 값</button>
      <button onClick={(focusInput)}>focusInput</button>
  </>

  )
}

const Counter = () =>{
  const [counter, setCounter] = useState(0)
  
  const numberRef = useRef(null)

  return(
    <>
    <div>counter : {counter}</div>
    <button onClick={()=>setCounter(prev=>prev+1)}>+</button>
    <button onClick={()=>setCounter(prev=>prev-1)}>-</button>
    <button onClick={()=>(numberRef.current = counter)}>Keep Value</button>
    <button onClick={()=>console.log(numberRef.current)}>Show Value</button>
    </>
  )
}


const ControlledInput= () =>{
  const [inputValue, setInputValue] =useState('')
  console.log("ControlledInput")
  return (
    <>
     <input value={inputValue}
     onChange = {(event)=>setInputValue(event.target.value)}/>
    </>
  )
}