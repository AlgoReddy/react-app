
import React,{useState} from 'react'
const App = () => {
    const [first, setfirst] = useState("chinna");
    const [age, setAge] = useState(19)
    function changeName() {
        setfirst("Yeswanth Reddy Shasankota");
        setAge(23);
    }
  return (
    <>
    <h1>My name is {first}  & my age is {age} </h1>
    <button onClick={changeName}>click</button>

    </>
  )
}

export default App
