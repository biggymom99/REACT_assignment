import "./App.css";
import {useState, useRef, useEffect} from "react";

function App() {
  const [todo,setTodo] = useState([
    {
      id : Number(new Date()),
      content : "안녕하세요",
    },
  ]);



  return (
    <>
      <h1>TODO LIST</h1>
      <Clock/>
      <StopWatch/>
      <Timer/>
      <TodoInput setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </>
  );
}

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() =>{
    setInterval(()=>{
      setTime(new Date())
    }, 1000)
  }, [])

  return(
    <div>{time.toLocaleTimeString()}</div>
  )
}

const formatTime =(seconds)=>{
  //  1시간 : 3600초
  //  1분 : 60초
  const timeString = `${String(Math.floor(seconds / 3600)).padStart(2,"0")} :
  ${String(Math.floor((seconds % 3600)/60)).padStart(2,"0")} : 
  ${String(seconds%60).padStart(2,"0")}`
  return( timeString );
}

const StopWatch=()=>{
  const[time, setTime]=useState(0)
  const[isOn, setIsOn]=useState(false)

  const timerRef = useRef(null)
  console.log(timerRef)
  useEffect(()=>{
    if (isOn ===true){
      const timerId = setInterval(()=>{
        setTime((prev)=>prev+1);
      }, 1000)
      timerRef.current = timerId;
    } else {
      clearInterval(timerRef.current);
    }
  },[isOn]);

  return(
    <div>
    {formatTime(time)}
    <button onClick={()=>setIsOn(prev=>!prev)}>{isOn ? "끄기" : "켜기"}</button>
    <button onClick={()=>{
      setTime(0);
      setIsOn(false);
    }}>초기화</button>
    </div>
  )
}

const Timer = () =>{
// 몇초를 셀건지? 
const [startTime, setStartTime]= useState(0);
const [isOn, setIsOn]= useState(false);
const [time, setTime]= useState(0);
const timerRef = useRef(null);

useEffect=(()=>{
  if (isOn && time > 0) {
    const timerId = setInterval(()=>{
      setTime((prev) => prev - 1);
    },1000);
    timerRef.current = timerId;
  } else if (!isOn || time == 0) {
    clearInterval(timerRef.current);
  }
},[isOn, time]);

return(
  <div>
    <div>
      {time ? formatTime(time):formatTime(startTime)}
      <button onClick={()=>{
        setIsOn(true)
        setTime(startTime)
        }}> 카운트다운 시작</button>
      <button onClick={()=>{
        setIsOn(false)
        setTime(startTime)
        }}> 카운트다운 정지</button>
    </div>
    <input 
      type="range" 
      value={startTime} 
      min='0'
      max='3600'
      step='30'
      onChange={(event)=>{
        setStartTime(event.target.value)
      }}/>
  </div>
)
}

const TodoInput = ({setTodo}) => {
  const inputRef = useRef(null)

  const addTodo = () => {
    const newTodo = {
      id: Number(new Date()),
      content : inputRef.current.value,
    };
    setTodo(prev => [...prev, newTodo])
  }

 return(
  <>
    <input ref={inputRef}/>
    <button onClick={addTodo}>추가</button>
  </>
 )
}

const TodoList = ({todo, setTodo}) => {
  return(
   <>
    <ul>
    {todo.map((el)=>(
      <Todo key={todo.id} todo={el} setTodo={setTodo}/>
    ))}
    </ul>
  </>
  )
}

const Todo = ({todo, setTodo}) =>{
  return(
    <>

      <li key={todo.id} >
        {todo.content}
        <button 
          onClick={()=>{
            setTodo((prev) => prev.filter
              ((el) => el.id !== todo.id));            
          }}
        >삭제</button>
      </li>

    </>
  )
}


export default App;
