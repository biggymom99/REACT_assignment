import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useState} from "react"


function App(){
  const [number, setNumber] = useState(1);
  console.log("number",number)
  const handler = () => {
    number = 2;
  }

  return (
    <div>
      number : {number}
      <br/>
      <button onClick={handle}>상태 업데이트!</button>
    </div>
  )
}
export default App;
                                                                                                                                 