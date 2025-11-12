import React from "react";
import Card from "./components/card";
export const App = () => {
  return (
    <>
     <div className="parent">
         <Card  user=' Yeswanth Reddy' age={23} img="https://images.unsplash.com/photo-1762368229295-81f2742fb8a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" />
      <Card user='Sai Mohan Reddy' age={28} img="https://images.unsplash.com/photo-1762704958591-fea0534458cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" />
      <Card  user='tofik' age={22} img="https://plus.unsplash.com/premium_photo-1676955432195-d744e29c60f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"/>
      <Card  user='aman' age={22}  img="https://images.unsplash.com/photo-1762707826575-d48c35b9b666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"/>
     </div>
    </>
  );
};
export default App;
