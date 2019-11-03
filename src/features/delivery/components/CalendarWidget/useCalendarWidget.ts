import { useState, useEffect } from "react";

// utils
import { getDaysInMonth, formatDateTitle } from "utils/dates";

type CalendarDays = {
  day: number;
  date: Date;
  className: string;
};

const useCalendarWidget = () => {
  const [calendarDate, setCalendarDate] = useState(new Date(2019, 7));
  const [calendarDays, setCalendarDays] = useState<CalendarDays[]>([]);

  const [selectedDate, setSelectedDate] = useState(new Date(2019, 7, 1));
  const [activeDate, setActiveDate] = useState(selectedDate);

  const firstDayPosition = calendarDate.getDay();
  const daysInMonth = getDaysInMonth(calendarDate);
  const formattedDateTitle = formatDateTitle(selectedDate);

  const getFirstDayPositionClassName = (index: number) =>
    `${
      index === firstDayPosition
        ? `calendar__days-item--start-${firstDayPosition}`
        : ""
    }`;

  const getDisabledDateClassName = (date: Date) =>
    `${
      date.getDay() === 2 || date.getDay() === 5 || date.getDay() === 6
        ? "calendar__days-item--disabled"
        : ""
    }`;

  const handleSetCalendarDays = () => {
    let day = 1;

    for (let i = 1; i < daysInMonth + firstDayPosition; i++) {
      if (i < firstDayPosition) {
        // to NOT add empty nodes before first day of the month
        continue;
      } else {
        const date = new Date(2019, 7, day);

        calendarDays.push({
          day,
          date,
          className: `${getFirstDayPositionClassName(
            i
          )} ${getDisabledDateClassName(date)}`
        });

        day++;
      }
    }
  };

  useEffect(() => {
    handleSetCalendarDays();
  }, []);

  return {
    calendarDays,
    selectedDate,
    setSelectedDate,
    activeDate,
    setActiveDate,
    formattedDateTitle
  };
};

export default useCalendarWidget;
