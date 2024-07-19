import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./../css/Calendar.css";

const Calendar1 = () => {
  const [value, setValue] = useState(new Date());

  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: "short" }).charAt(0);
  };

  return (
    <div className=" max-h-[42vh] flex items-center shadow-md rounded-sm justify-center bg-white">
      <Calendar
        onChange={setValue}
        value={value}
        formatShortWeekday={formatShortWeekday}
        className="rounded-md"
      />
    </div>
  );
};

export default Calendar1;
