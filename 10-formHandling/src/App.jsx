import React from 'react'

const App = () => {
    // but what we are trying here directly changing the code thorough the code directly but we have to tell the react js so that it can make the changes
    // now it's time to the two-way binding in the react
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form is submitted");

  }
  return (
  <div>
   <form onSubmit={(e)=>{
    submitHandler(e);
   }} >
    <input type="text"  placeholder='Enter your name'/>
    <button>Submit</button>
   </form>
  </div>
  )
}

export default App
