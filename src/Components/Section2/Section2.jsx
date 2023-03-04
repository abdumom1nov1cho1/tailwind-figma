import React from "react";
import man from "../../Images/man.svg"


const Section2 = () => {
  return (
    <div>
      <div className="container mx-auto">
        <header className=" mt-16 xs:flex block">
          <div className="xs:text-start text-center" >
            <h1 className="text-orange-700  mt-5 md:text-3xl text-2xl ">About Us</h1>
            <h1 className="text-gray-700 font-medium mt-6  md:text-4xl text-2xl">We're More Than Digital Agency in the World</h1>
            <p className="text-gray-500 mt-8 md:text-xm text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit of the
              voluptatem <br /> accusantium lorem sit doloremque, totam rem aperiam,
              eaque ipsa <br /> quae ab illo invento veritatis quasi architecto beatae
              vitae dicta.
            </p>
            <button className=" bg-orange-500 w-32 rounded-full text-white mt-2 h-12 xs:text-base text-xs">
              Contact Us
            </button>
          </div>
          <div className="mt-16" >
            <img className="mx-auto" src={man} alt="" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Section2;
