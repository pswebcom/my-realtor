import React from "react";

const Header = () => {
  return (
    <div className="bg-white border-b shadow-sm sticky z-50 top-0">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex space-x-10 ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Offers</li>
            <li className="cursor-pointer">SignIn</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
