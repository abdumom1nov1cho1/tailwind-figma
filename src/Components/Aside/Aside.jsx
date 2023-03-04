import React from "react";
import left from "../../Images/1.svg"
import right from "../../Images/card5.svg"


const Aside = () => {
  return (
    <div>
      <div className="container mx-auto mt-40">
        <h1 className="text-orange-700  mt-5 md:text-3xl text-2xl sm:text-start text-center " >
          TESTIMONIAL
        </h1>
        <h1 className="text-gray-700 font-medium mt-6  md:text-4xl text-2xl sm:text-start text-center ">
          What Our Customer Say <br /> About Us
        </h1>
        <div className=" mt-24 xs:flex block justify-between">
          <img src={right} alt="" className="mx-auto" />
          <img src={left} alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Aside;
