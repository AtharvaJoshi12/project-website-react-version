import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="">
      <div class="drop-shadow-lg list-none flex flex-col w-[60%] text-center rounded-2xl m-auto mt-10 bg-white p-0 sm:flex-row sm:justify-around sm:w-[60%] lg:w-[35%]">
        <NavLink to="/home">
          <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
            All
          </li>
        </NavLink>

        <hr />

        <NavLink to="/reactjs">
          <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
            React
          </li>
        </NavLink>

        <hr />

        <NavLink to="/nextjs">
          <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
            Next Js
          </li>
        </NavLink>

        <hr />

        <NavLink to="/normal">
          <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
            Normal
          </li>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
