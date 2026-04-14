import React from "react";
import friends from "../../../public/friends.json";
import FriendCard from "@/components/friendscard/FriendCard";
const FriendsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Friends</h1>
      <div className="p-6 bg-base-200 min-h-screen rounded-2xl mb-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
