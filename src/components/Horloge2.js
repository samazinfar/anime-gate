import React, { useState, useEffect } from "react";

export default function ClockJapan() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p>
        Time :{" "}
        {date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Tokyo",
        })}
      </p>
    </div>
  );
}
