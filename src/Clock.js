import React, { useState, useEffect } from "react";

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  const dateWithMoreHours = (hours) => {
    const updateDate = new Date();
    updateDate.setHours(updateDate.getHours() + hours);
    return updateDate;
  };

  useEffect(() => {
    const timer = setInterval(() => setDate(dateWithMoreHours(7)), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p> Time : {date.toLocaleTimeString()}</p>
      <p> Date : {date.toLocaleDateString()}</p>
    </div>
  );
};

export default DateTime;
