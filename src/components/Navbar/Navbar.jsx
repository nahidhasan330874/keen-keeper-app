import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <h2 className="text-xl font-medium">Keen<span className="text-[#244D3F]">Keeper</span></h2>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li> 
          <li>
            <a>Link</a>
          </li> 
          <li>
            <a>Link</a>
          </li> 

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
