"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const bdTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
        month: "short",  
        day: "2-digit", 
        year: "numeric",
      });
      setTime(bdTime);
    });

    
  }
);

  return <p>{time}</p>;
}
