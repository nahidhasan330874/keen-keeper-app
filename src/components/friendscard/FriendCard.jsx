
export default function FriendCard({ friend }) {
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
    <div className="bg-white shadow-md rounded-xl p-5 text-center">
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full mx-auto mb-3"
      />

      <h2 className="font-semibold text-lg">{friend.name}</h2>
      <p className="text-sm text-gray-400 mb-2">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mb-3 flex-wrap">
        {friend.tags.map((tag, id) => (
          <span
            key={id}
            className="text-xs uppercase font-medium bg-[#CBFADB] text-[#244D3F] px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status */}
      <span
        className={`text-white font-medium capitalize text-xs px-3 py-1 rounded-full ${getStatusColor(
          friend.status
        )}`}
      >
        {friend.status}
      </span>
    </div>
  );
}