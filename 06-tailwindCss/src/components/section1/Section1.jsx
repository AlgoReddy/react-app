import React from "react";
import Navbar from "./Navbar.jsx";
import PageOneContent from "./PageOneContent.jsx";
import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";
const Section1 = (props) => {
  return (
    <div className="h-screen w-full ">
      {" "}
      <Navbar />
      <PageOneContent users ={props.users}/>

    </div>
  );
};
export default Section1;
