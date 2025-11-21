
import React,{useState} from 'react'
const App = () => {
    const [first, setfirst] = useState("chinna");
    const [age, setAge] = useState(19)
    function changeName() {
        setfirst("Yeswanth Reddy Shasankota");
        setAge(23);
    }
const [number, Setnumber] = useState(0);
function increaseNum() {
    Setnumber(number+1);
}
function decreaseNum() {
    Setnumber(number-1);
}
  return (
    <>
    {/* <h1>My name is {first}  & my age is {age} </h1>
    <button onClick={changeName}>click</button> */}

    <h1>{number}</h1>
    <button onClick={decreaseNum}  onMouseEnter={decreaseNum} onKeyDown={decreaseNum}>Decrease</button>
    <button onClick={increaseNum} onMouseEnter={increaseNum} onKeyUp={increaseNum}>Increase </button>

    </>
  )
}

export default App
