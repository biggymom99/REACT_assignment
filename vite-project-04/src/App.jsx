import { useState } from 'react'
import { Link, Route, Routes, 
  useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom'
import './App.css'

function App() {
  // 인자에 따른 특정주소로의 이동
  const navigate = useNavigate()
  // 현재페이지의 위치정보를 가진 객체생성
  const location = useLocation()
  return (
    <>
    <div>
      {/** 
      <Link to="/main">메인</Link>
      <Link to="/mypage">  마이페이지</Link>
      <Link to="/test">  테스트</Link>
      */}
      <div>
        <button onClick={()=>navigate('/main')}>메인</button>
        <button onClick={()=>navigate('/mypage')}>마이페이지</button>
        <button onClick={()=>navigate('/test')}>테스트</button>
      </div>
      <div>
        <button onClick={()=>navigate(-1)}>{`뒤로`}</button>
        <button onClick={()=>navigate(1)}>{`앞으로`}</button>
      </div>
    </div>
    <Routes>
      <Route path="/main:name" element={<Main />}/>
      <Route path="/mypage" element={<div>마이 페이지</div>}/>
      <Route path="/test" element={<div>테스트 페이지</div>}/>
    </Routes>
    </>
  )
}

function Main() {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  // 객체 중 하나만 가져오기 : searchParams.get("name")
  
  return(
    <div>메인페이지</div>
  )
}

export default App
