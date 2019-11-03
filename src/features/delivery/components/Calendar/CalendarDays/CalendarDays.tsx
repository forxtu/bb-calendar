import React, { useState, useEffect } from "react";

// components
import Text from "components/elements/Typography/Text";

// styles
import "features/delivery/components/Calendar/CalendarWeek/CalendarWeek.scss";

type CalendarDays = {
  calendarDays: any[];
  selectedDate: any;
  activeDate: any;
  setActiveDate: (x: any) => void;
};

const CalendarDays = ({
  calendarDays,
  selectedDate,
  activeDate,
  setActiveDate
}: CalendarDays) => {
  useEffect(() => {
    setActiveDate(selectedDate);
  }, [selectedDate]);

  return (
    <div className="calendar__days">
      {calendarDays.map(({ day, date, className = "" }) => (
        <div
          key={day}
          className={`calendar__days-item ${className} ${
            activeDate.getDate() === date.getDate()
              ? "calendar__days-item--selected"
              : ""
          }`}
          onClick={() => setActiveDate(date)}
        >
          <Text type="small" className="calendar__days-item-text">
            {day}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
