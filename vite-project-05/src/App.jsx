import { useEffect, useState } from 'react'
import {Component} from 'react';
import './App.css'

function App() {
  const[showCounter,setShowCounter]=useState(false);
  return(
    <>
    {showCounter && <Counter/>}
    <br/>
    <button onClick={()=>
      setShowCounter((prev)=> !prev)
    }>show?</button>
    </>
  )
}

function Counter() {
  const [counter,setCounter]=useState(0)
  const [counter2,setCounter2]=useState(100)
  useEffect(()=>{
    console.log("useEffect")
  },[])
    return (
      <>
        <div>counter : {counter}</div>
        <button onClick={()=>
          setCounter(counter + 1)}
          >+1</button>
        <div>counter2 : {counter2}</div>
        <button onClick={()=>
          setCounter2(counter2 - 1)}
          >-1</button>
      </>
    )
  }


export default App
