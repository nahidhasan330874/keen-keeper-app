"use client";
import FriendContext from "@/context/FriendContext";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { timeline } = useContext(FriendContext);

  // ✅ safety
  const safeTimeline = timeline || [];

  const callCount = safeTimeline.filter((item) => item.type === "call").length;

  const videoCount = safeTimeline.filter(
    (item) => item.type === "video",
  ).length;

  const textCount = safeTimeline.filter((item) => item.type === "text").length;

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: videoCount , fill: "#00C49F" },
    { name: "Video", value: textCount, fill: "#FFBB28" },
  ];

  return (
    <div className="container mx-auto mb-20 ">
      <h2 className=" text-4xl font-bold   mt-20 mb-5 pt-10 ">
        Friendship Analytics
      </h2>
      <div className="bg-base-200  shadow-2xl  p-12 rounded-2xl">
        <h2 className="text-[#244D3F] text-xl font-medium">
          By Interaction Type
        </h2>

        <div className="flex justify-center items-center text-center">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "300px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Tooltip></Tooltip>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
