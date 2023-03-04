import React from "react";
import Logo from "../Logos/Logo.svg"

const Navbar = () => {
  return (
    <div>
      <nav className="container m-auto">
        <div className="container mx-auto px-8 p-5 flex justify-between  gap-32">
          <img src={Logo} alt="" />
          <ul className=" gap-5 pt-3 font-medium md:flex hidden " >
            <li className="" >Features</li>
            <li>Pricing & Plans</li>
            <li>Support</li>
            <li>About Us</li>
          </ul>
          <button className=" bg-orange-500 w-32 rounded-full text-white mt-2 h-12 xs:text-base text-xs" >Contact Us</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
