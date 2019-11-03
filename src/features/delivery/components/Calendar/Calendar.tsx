import React from "react";

// components
import CalendarMonth from "features/delivery/components/Calendar/CalendarMonth";
import CalendarWeek from "features/delivery/components/Calendar/CalendarWeek";
import CalendarDays from "features/delivery/components/Calendar/CalendarDays";
import CalendarControls from "features/delivery/components/Calendar/CalendarControls";

// styles
import "features/delivery/components/Calendar/Calendar.scss";

type Calendar = {
  calendarDays: any[];
  selectedDate: any;
  activeDate: any;
  setSelectedDate: (x: any) => void;
  setActiveDate: (x: any) => void;
  handleClose?: () => void;
};

const Calendar = ({
  calendarDays,
  selectedDate,
  setSelectedDate,
  activeDate,
  setActiveDate,
  handleClose
}: Calendar) => (
  <div className="calendar__wrapper">
    <CalendarMonth />
    <CalendarWeek />
    <CalendarDays
      calendarDays={calendarDays}
      selectedDate={selectedDate}
      activeDate={activeDate}
      setActiveDate={setActiveDate}
    />
    <CalendarControls
      onModalClose={handleClose}
      activeDate={activeDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  </div>
);

export default Calendar;
