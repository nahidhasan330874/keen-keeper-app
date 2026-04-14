import FriendsPage from "@/app/friends/page";
import React from "react";
import { MdAdd } from "react-icons/md";

const Banner = () => {
     const stats = [
    {
      title: "Total Friends",
      value: 10,
    },
    {
      title: "On Track",
      value: 3,
    },
    {
      title: "Need Attention",
      value: 6,
    },
    {
        title: "Interactions This Month",
        value: 12,
    },
  ];

  return (
    <div className="container mx-auto mt-30">
      <div className="m-16 text-center  space-y-4">
        <h2 className="text-5xl font-bold">Friends to keep close in your life</h2>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br /> the relationships that matter most.
        </p>

         <button className="btn bg-[#244D3F]  text-white shadow-xl"><MdAdd />  Add a Friend</button>
      </div>

    

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 border-b border-[#E9E9E9] mb-0 ">
      {stats.map((item, index) => (
          <div
          key={index}
          className="bg-white shadow-md rounded-2xl border border-gray-100 p-8 text-center hover:shadow-xl transition"
          >
          <p className="text-3xl font-bold mt-2">{item.value}</p>
          <h2 className="text-gray-500 text-sm">{item.title}</h2>
        </div>
      ))}
    </div>

      <FriendsPage ></FriendsPage>
    
</div>
  
  
);

};

export default Banner;
