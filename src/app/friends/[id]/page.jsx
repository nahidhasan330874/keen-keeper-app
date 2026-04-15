import Clock from "@/components/clock/Clock";
import FriendsUploadBtn from "@/components/friendsbtn/FriendsUploadBtn";
import Image from "next/image";
import React from "react";
 import { FaBoxArchive } from "react-icons/fa6";
import { RiDeleteBin6Fill, RiNotificationSnoozeFill } from "react-icons/ri";

const friendPromise = async () => {
  const time = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
  });
  const res = await fetch(" http://localhost:3000/friends.json");
  const data = await res.json();
  return data;
};

const friendsDetailsPage = async ({ params }) => {
  const friends = await friendPromise();
  const { id } = await params;
  const friend = friends.find((e) => e.id === parseInt(id));

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-[#EF4444]";
      case "on-track":
        return "bg-[#244D3F]";
      case "almost due":
        return "bg-[#EFAD44]";
    }
  };
 
  

  return (
    <div className="min-h-screen bg-gray-100 pt-10 ">
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-gray-100 rounded-3xl  p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
         
          <div className="">
            <div className="lg:col-span-1 bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-base-300 shadow-xl ">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src={friend.picture} alt={friend.name} />
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-base-content">
              {friend.name}
            </h2>

            <div className="flex flex-col gap-3 mt-1">
              <div>
                <span
                  className={`text-white font-medium capitalize text-xs px-3 py-1 rounded-full ${getStatusColor(
                    friend.status,
                  )}`}
                >
                  {friend.status}
                </span>
              </div>
              <div className="flex justify-center gap-2 mb-2 flex-wrap">
                {friend.tags.map((tag, id) => (
                  <span
                    key={id}
                    className="text-xs uppercase font-medium bg-[#CBFADB] text-[#244D3F] px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-1 text-sm line-clamp-2 text-base-content/70 italic">
              {friend.bio}
            </p>
            <p className="text-xs text-base-content/60 mt-1">
              Preferred: {friend.email}
            </p>
            </div>
            
            <div className="mt-5 w-full space-y-2 ">
              <button className="btn  border-gray-300 btn-sm w-full justify-start gap-2 hover:bg-[#244D3F] hover:text-white">
                <span>
                  <RiNotificationSnoozeFill />
                </span> 
                Snooze 2 Weeks
              </button>
              <button className="btn border-gray-300 btn-sm w-full justify-start gap-2  hover:bg-[#244D3F] hover:text-white">
                <span>
                 
                  <FaBoxArchive />
                </span> 
                Archive
              </button>
              <button className="btn btn-sm w-full justify-start gap-2 text-red-500 border-gray-300 hover:bg-[#244D3F] hover:text-white">
                <span>
                 
                  <RiDeleteBin6Fill />
                </span> 
                Delete
              </button>
            </div>
          </div>
         
          <div className="lg:col-span-2 space-y-6">
        
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-base-100 rounded-2xl p-6 text-center border border-base-300 shadow-2xl">
                <div className="text-2xl font-bold text-[#244D3F] ">   
                  {friend.days_since_contact}
                </div>
                <div className="text-sm text-base-content/60 mt-1">
                  Days Since Contact
                </div>
              </div>

              <div className="bg-base-100 rounded-2xl p-6 text-center border border-base-300 shadow-2xl">
                <div className="text-2xl font-bold text-[#244D3F]">
                  {friend.goal}
                </div>
                <div className="text-sm text-base-content/60 mt-1">
                  Goal (Days)
                </div>
              </div>

              <div className="bg-base-100 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-base-300 shadow-2xl">
                <div className="text-xl font-bold  text-[#244D3F]">
                  <Clock />
                </div>

                <div className="text-sm text-base-content/60 mt-1">
                  Next Due
                </div>
              </div>
            </div>

            <div className="bg-base-100 rounded-2xl p-6 border border-base-300 shadow-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-[#244D3F]">
                    Relationship Goal
                  </h3>
                  <p className="text-base-content/70 mt-2">
                    Connect every{" "}
                    <span className="font-bold text-black">
                      {friend.goal} days
                    </span>
                  </p>
                </div>
                <button className="btn btn-sm btn-outline border-gray-300 px-5">
                  Edit
                </button>
              </div>
            </div>

            <div className="bg-base-100 rounded-2xl p-6 border border-base-300 shadow-2xl">
              <h3 className="font-semibold text-lg mb-4 text-[#244D3F]">
                Quick Check-In
              </h3>
                  <FriendsUploadBtn></FriendsUploadBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default friendsDetailsPage;
