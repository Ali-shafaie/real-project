import React from "react";
import { useLocation, useNavigate } from "react-router";
export default function HeaderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white  border-b  shadow-sm sticky top-0 z-50">
      <header className=" max-w-7xl mx-auto items-center py-4 px-2 sticky top-0">
        <div className=" flex  justify-between  items-center">
          <div
            className="cursor-pointer font-bold"
            onClick={() => navigate("/")}
          >
            <span className="text-red-500 ">Real</span>
            website
          </div>
          <div className="text-gray-300">
            <ul className="flex space-x-10 md:space-x-6 lg:space-x-10 cursor-pointer">
              <li
                className={`cursor-pointer py-1 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent ${
                  pathMathRoute("/") && "text-black border-b-red-500"
                }`}
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className={`cursor-pointer py-1 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent ${
                  pathMathRoute("/offers") && "text-black border-b-red-500"
                }`}
                onClick={() => navigate("/offers")}
              >
                Offers
              </li>
              <li
                className={`cursor-pointer py-1 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent ${
                  pathMathRoute("/sign-in") && "text-black border-b-red-500"
                }`}
                onClick={() => navigate("/sign-in")}
              >
                Sign In 
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
