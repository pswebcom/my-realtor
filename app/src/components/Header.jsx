import React from "react";
import { useLocation } from "react-router";

const Header = () => {
  const maLocation = useLocation();

  const pathMatchRoute = (route) => {
    return route === maLocation.pathname ? true : "";
  };

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
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] cursor-pointer border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px]  cursor-pointer border-b-transparent
               ${pathMatchRoute("/offers") && "text-black border-b-red-500"}
               `}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px]  cursor-pointer border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              }`}
            >
              SignIn
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
