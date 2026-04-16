"use client";
import { MdCall } from "react-icons/md";
import { IoIosText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";
import { useContext } from "react";
import FriendContext from "@/context/FriendContext";

export default function FriendsUploadBtn({ friend }) {

  const { addTimeline } = useContext(FriendContext);

  const handleClick = (type) => {
    addTimeline(type, friend); 
    toast.success(`${type} added to timeline`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button onClick={() => handleClick("call")} className="btn btn-outline border-gray-300 text-xl py-8 hover:bg-[#244D3F] hover:text-white shadow-2xl">
       <span className="text-2xl"><MdCall /></span>
         Call
      </button>

      <button onClick={() => handleClick("text")} className="btn btn-outline border-gray-300 text-xl py-8 hover:bg-[#244D3F] hover:text-white shadow-2xl">
        <span className="text-2xl"><IoIosText /></span>
         Text
      </button>

      <button onClick={() => handleClick("video")} className="btn btn-outline border-gray-300 text-xl py-8 hover:bg-[#244D3F] hover:text-white shadow-2xl">
      <span className=" text-2xl"><FaVideo /> </span>
        Video
      </button>
    </div>
  );
}