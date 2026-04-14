import React from "react";
import MyLink from "./MyLink";
import { FaHome } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import Image from "next/image";
import NavbarImg from "@/assets/logo.png";

const Navbar = () => {

    const navItems = [
  {
    path: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    path: "/timeline",
    text: "Timeline",
    icon:  <IoMdTime />,
  },
  {
    path: "/stats",
    text: "Stats",
    icon: <IoStatsChart />,
  },
];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Image
          src={ NavbarImg }
          alt="keen keeper"
          width={130}
          height={30}
        
        />

       
       </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal  flex gap-2">
           {navItems.map((item, index) => (
            // Client component
            <MyLink key={index} href={item.path}>
             <p className="flex gap-1 items-center justify-center">   {item.icon}{item.text}</p>
            </MyLink>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
