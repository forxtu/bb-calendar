import React, { useEffect } from "react";

// utils
import { CalendarDays as CalendarDaysType } from "features/delivery/components/DeliveryDayButton/useDeliveryDayButton";

// components
import Text from "components/elements/Typography/Text";

// styles
import "features/delivery/components/Calendar/CalendarDays/CalendarDays.scss";

type CalendarDays = {
  calendarDays: CalendarDaysType[];
  selectedDate: Date;
  activeDate: Date;
  setActiveDate: (date: Date) => void;
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
          <Text className="calendar__days-item-text">{day}</Text>
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
