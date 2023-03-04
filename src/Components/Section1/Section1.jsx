import React from "react";
import card1 from "../../Images/card1.svg";
import card2 from "../../Images/card2.svg";
import card4 from "../../Images/card4.svg";

const Section1 = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-24  xs:flex block xs:justify-between justify-center text-center xs:text-start " >
        <div className="xs:w-1/3 w-full mt-9 " >
          <h1 className="text-orange-700  mt-5 md:text-3xl text-2xl " >What we do</h1>
          <h1 className="text-gray-700 font-medium mt-6  md:text-4xl text-2xl " >We Are Here To Help You <br /> Build Your Business</h1>
          <p className="text-gray-500 mt-8 md:text-xm text-sm " >
            Sed ut perspiciatis unde omnis iste natus error sit of the
            voluptatem <br /> accusantium lorem sit doloremque, totam rem aperiam,
            eaque ipsa <br /> quae ab illo invento veritatis quasi architecto beatae
            vitae dicta.
          </p>
          <button className="bg-orange-500 text-white w-44 h-12 rounded-3xl mt-7 ">
            Explore all service
          </button>
        </div>
        <div className="">
          <div className=" w-full sm:grid grid-cols-2 grid-row-2 gap-4   ">
            <img src={card1} alt="" className="mx-auto" />
            <img src={card2} alt="" className="mx-auto" />
            <img src={card4} alt="" className="mx-auto" />
            <img src={card4} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
