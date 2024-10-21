import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './page/Detail'
import Search from './page/Search'
import Main from './page/Main'
import {Route, Routes, useNavigate} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  const [inputValue,setInputValue] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <header>
        <h1>동 물 좋 아</h1>
        <input value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={()=>navigate(`/search?animal=${inputValue}`)}>검색</button>
      </header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
      <footer>all rights reservered to OZ</footer>
    </>
  )
}

export default App
