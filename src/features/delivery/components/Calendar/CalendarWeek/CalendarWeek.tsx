import React from "react";

// components
import Text from "components/elements/Typography/Text";

// styles
import "features/delivery/components/Calendar/CalendarWeek/CalendarWeek.scss";

const CalendarWeek = () => {
  const calendarWeek = [
    { day: 1, label: "M" },
    { day: 2, label: "T" },
    { day: 3, label: "W" },
    { day: 4, label: "T" },
    { day: 5, label: "F" },
    { day: 6, label: "S" },
    { day: 7, label: "S" }
  ];

  return (
    <div className="calendar__week">
      {calendarWeek.map(weekDay => (
        <Text key={weekDay.day} className="calendar__week-day">
          {weekDay.label}
        </Text>
      ))}
    </div>
  );
};

export default CalendarWeek;
