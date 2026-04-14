"use client";
import React, { useState, useEffect } from "react";
import friends from "../../../public/friends.json";
import FriendCard from "@/components/friendscard/FriendCard";
 

const FriendsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Your Friends</h1>

      <div className="p-6 bg-gray-100 min-h-screen rounded-2xl mb-10">
        
        
        {loading && (
          <div className="flex justify-center mb-4 text-[#244D3F] text-2xl font-medium">
             Loading...
          </div>
        )}

      
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
             
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;