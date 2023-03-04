import React from "react";
import logo1 from "../Logos/logo1.svg";
import logo2 from "../Logos/logo2.svg";
import logo3 from "../Logos/logo3.svg";
import logo4 from "../Logos/logo4.svg";
import logo5 from "../Logos/logo5.svg";

const Section = () => {
  return (
    <div>
      <section className="container mx-auto">
        <div className="m-24">
          <h1 className="text-center m-9 text-gray-600 font-medium ">
            OUR TRUSTED CLIENTS
          </h1>
          <div className="flex justify-between  flex-wrap mt-2 gap-9 ">
            <img className="mt-5" src={logo1} alt="" />
            <img className="mt-5" src={logo2} alt="" />
            <img className="mt-5" src={logo3} alt="" />
            <img className="mt-5" src={logo4} alt="" />
            <img className="mt-5" src={logo5} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
