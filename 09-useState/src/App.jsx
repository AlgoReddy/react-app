
import React,{useState} from 'react'
const App = () => {
//     const [first, setfirst] = useState("chinna");
//     const [age, setAge] = useState(19)
//     function changeName() {
//         setfirst("Yeswanth Reddy Shasankota");
//         setAge(23);
//     }
// const [number, Setnumber] = useState(0);
// function increaseNum() {
//     Setnumber(number+1);
// }
// function decreaseNum() {
//     Setnumber(number-1);
// }

// const [num , setNum] = useState({user:"chinna",age:8});
// const buttonChange=()=>{
//     const newNum={...num};
//     newNum.user="Yeswanth Reddy Shasankota";
//     newNum.age=24;
//     setNum(newNum);
// }

// how to do  the batch update  .
// we have to use the arrow function
const [no, setno] = useState(10);
const btnClicked=()=>{
    setno(prev=>(prev+1))
    setno(prev=>(prev+1))
    setno(prev=>(prev+1))

}


  return (
    <>
    {/* <h1>My name is {first}  & my age is {age} </h1>
    <button onClick={changeName}>click</button> */}

    {/* <h1>{number}</h1>
    <button onClick={decreaseNum}  onMouseEnter={decreaseNum} onKeyDown={decreaseNum}>Decrease</button>
    <button onClick={increaseNum} onMouseEnter={increaseNum} onKeyUp={increaseNum}>Increase </button> */}
 {/* <h1>{num.user} and my age is {num.age}</h1>
 <button onClick={buttonChange}>click</button> */}

 <h1>{no}</h1>
 <button onClick={btnClicked}>Click</button>
    </>
  )
}

export default App
