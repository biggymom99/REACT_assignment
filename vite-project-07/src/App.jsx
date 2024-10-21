import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const {counter,increment,decrement}=useCounter(0)

  return(
    <>
    <div>counter : {counter}</div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>

    </>
  )
}

const useFetch= (url) =>{
  const [loading,setLoading]=useState(true)
  const [data,setData]=useState(null)
  const [err,setErr]=useState(null)

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
    .then(res => {
      setData(res)
      setLoading(false)})
    .catch((err)=> setErr(err))
  }, [])
}


const useCounter = (initialValue=0, step=1) =>{
  const [counter, setCounter] = useState(initialValue)

  const increment= ()=>setCounter(prev=>prev+step);
  const decrement= ()=>setCounter(prev=>prev-step);

  return {count, increment, decrement}
}

export default App
