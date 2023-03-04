import React from "react";
import port1 from "../../Images/port1.svg"
import port2 from "../../Images/port2.svg"
import port3 from "../../Images/port3.svg"
import port4 from "../../Images/port4.svg"
import port5 from "../../Images/port5.svg"
import port6 from "../../Images/port6.svg"



const Section3 = () => {
  return (
    <div className="container mx-auto ">
      <div className="mt-40">
        <h1 className="text-orange-700  mt-5 md:text-3xl text-2xl sm:text-start text-center">Our Work</h1>
        <h1 className="text-gray-700 font-medium mt-6  md:text-4xl text-2xl sm:text-start text-center ">See Our Recent Case Studies</h1>
      </div>
      <div className="mt-32 grid xs:grid-cols-3 grid-cols-2 grid-cols-1">
        <img src={port1} alt="" className="mx-auto" />
        <img src={port2} alt="" className="mx-auto" />
        <img src={port3} alt="" className="mx-auto" />
        <img src={port4} alt="" className="mx-auto" />
        <img src={port5} alt="" className="mx-auto" />
        <img src={port6} alt="" className="mx-auto" />
      </div>
    </div>
  );
};

export default Section3;
