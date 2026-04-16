"use client";
import { FaVideo } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { useContext, useState } from "react";
import FriendContext from "@/context/FriendContext";
import Clock from "@/components/clock/Clock";



const iconMap = {
  call: <MdCall />,
  video: <FaVideo />,
  text: <IoIosText />,
};
export default function TimelinePage() {
  const { timeline } = useContext(FriendContext);

  const [filter, setFilter] = useState("All");
  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6 mt-10">Timeline</h1>
      <select
        className="border border-gray-300  rounded-lg  py-1 px-20 mb-6"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="text">Text</option>
        <option value="call">Call</option>
        <option value="video">Video</option>
      </select>

      <div className="space-y-4">
        {filteredData.length === 0 ? (
          <p className="flex justify-center  items-center text-4xl font-bold p-20 m-20">
            Not Found
          </p>
        ) : (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm"
            >
              <div className="text-3xl">{iconMap[item.type]}</div>

              <div>
                <p className="font-semibold">
                  <span className="text-[#244D3F] capitalize">{item.type} </span>
                  <span className="text-gray-500 text-sm">
                    with {item.name}
                  </span>
                </p>
                <span className="text-sm text-gray-500">
                  <Clock></Clock>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
