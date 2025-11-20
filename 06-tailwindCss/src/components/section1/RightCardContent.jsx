import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute  top-0 left-0 h-full w-full  p-6 flex flex-col justify-between">
      <h2 className="bg-white text-2xl font-bold rounded-full h-14 w-14 flex justify-center items-center">
       {props.id+1}
      </h2>
      <div>
        <p className="text-lg leading-relaxed text-white mb-22">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          molestias error illo reiciendis dolorum porro quaerat unde vel fuga
          in!
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-500 text-white font-medium px-4 py-3 rounded-full">
            <i className="ri-arrow-right-line"> </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
