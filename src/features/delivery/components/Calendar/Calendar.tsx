import React from "react";

// utils
import { CalendarDays as CalendarDaysType } from "features/delivery/components/DeliveryDayButton/useDeliveryDayButton";

// components
import CalendarMonth from "features/delivery/components/Calendar/CalendarMonth";
import CalendarWeek from "features/delivery/components/Calendar/CalendarWeek";
import CalendarDays from "features/delivery/components/Calendar/CalendarDays";
import CalendarControls from "features/delivery/components/Calendar/CalendarControls";

// styles
import "features/delivery/components/Calendar/Calendar.scss";

type Calendar = {
  calendarDays: CalendarDaysType[];
  selectedDate: Date;
  activeDate: Date;
  setSelectedDate: (date: Date) => void;
  setActiveDate: (date: Date) => void;
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
