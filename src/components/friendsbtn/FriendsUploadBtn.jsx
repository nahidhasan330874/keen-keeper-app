 "use client";

import { MdCall } from "react-icons/md";
import { IoIosText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

export default function FriendsUploadBtn() {

   const handleClick = (type) => {
       alert(`${type} added to timeline `);
       console.log("click")
  };

  return (
    <div className="grid grid-cols-3 gap-4">

      <button onClick={() => handleClick("call")} className="btn btn-outline p-5">
        <MdCall /> Call
      </button>

      <button onClick={() => handleClick("text")} className="btn btn-outline p-5">
        <IoIosText /> Text
      </button>

      <button onClick={() => handleClick("video")} className="btn btn-outline p-5">
        <FaVideo /> Video
      </button>

    </div>
  );
}