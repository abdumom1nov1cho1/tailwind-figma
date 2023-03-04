import React from "react";
import img1 from "../../Images/img1.svg"



const Header = () => {
  return (
    <div>
      <header className="container m-auto">
        <div className=" md:text-start text-center mt-9 md:flex block md:justify-evenly text-center  ">
          <div className="mt-32" >
            <h1 className="md:text-6xl text-5xl font-medium text-gray-700 ">
              Best <span className="text-orange-600">Marketing</span> <br /> Digital Agency
            </h1>
            <p className="mt-16 text-gray-500" >
              Various versions have evolved over the years, <br /> sometimes by
              accident, sometimes on purpose
            </p>
            <div className="md: mt-9  ">
              <button className="bg-orange-500 text-white w-32 h-12 rounded-3xl ">Get Started</button>
              <button className="text-orange-500 w-32 h-12 rounded-3xl" >Watch Video</button>
            </div>
          </div>
          <div className="md:justify-center">
            <img className="mx-auto md:justify-center md:w-full  w-1/1 " src={img1} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
