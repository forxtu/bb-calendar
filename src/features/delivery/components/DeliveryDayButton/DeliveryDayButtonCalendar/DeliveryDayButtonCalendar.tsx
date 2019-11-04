import React from "react";

// utils
import { CalendarDays as CalendarDaysType } from "features/delivery/components/DeliveryDayButton/useDeliveryDayButton";

// components
import Text from "components/elements/Typography/Text";
import Modal from "components/blocks/Modal";
import Calendar from "features/delivery/components/Calendar";

// styles
import calendar from "assets/images/calendar.svg";

type DeliveryDayButtonCalendarProps = {
  selectedDate: Date;
  activeDate: Date;
  isModalOpen: boolean;
  calendarDays: CalendarDaysType[];
  setIsModalOpen: (x: boolean) => void;
  setSelectedDate: (date: Date) => void;
  setActiveDate: (date: Date) => void;
};

const DeliveryDayButtonCalendar = ({
  isModalOpen,
  setIsModalOpen,
  calendarDays,
  selectedDate,
  setSelectedDate,
  activeDate,
  setActiveDate
}: DeliveryDayButtonCalendarProps) => (
  <div className="delivery-day-button__calendar">
    <div className="delivery-day-button__calendar-icon">
      <img src={calendar} alt="calendar" />
      <Text type="small" className="delivery-day-button__calendar-date">
        {selectedDate.getDate()}
      </Text>
    </div>
    <div className="delivery-day-button__calendar-btn">
      <Text type="small" className="delivery-day-button__calendar-btn-text">
        Change
      </Text>
    </div>

    {isModalOpen && (
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Calendar
          calendarDays={calendarDays}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
        />
      </Modal>
    )}
  </div>
);

export default DeliveryDayButtonCalendar;
