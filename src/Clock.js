import React, { useState, useEffect } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  const dateWithMoreHours = (hours) => {
    const updateDate = new Date();
    updateDate.setHours(updateDate.getHours() % 12 || 12 + hours);
    return updateDate;
  };

  useEffect(() => {
    const timer = setInterval(() => setDate(dateWithMoreHours()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p>
        {" "}
        Time :{" "}
        {date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Tokyo",
        })}{" "}
      </p>
    </div>
  );
};

export default Clock;
