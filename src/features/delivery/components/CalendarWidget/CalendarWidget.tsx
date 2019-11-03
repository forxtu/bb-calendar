import React, { useState } from "react";

// hooks
import useCalendarWidget from "features/delivery/components/CalendarWidget/useCalendarWidget";

// components
import Text from "components/elements/Typography/Text";
import Modal from "components/blocks/Modal";
import Calendar from "features/delivery/components/Calendar";

// styles
import "features/delivery/components/CalendarWidget/CalendarWidget.scss";
import van from "assets/images/van.svg";
import calendar from "assets/images/calendar.svg";

const CalendarWidget = () => {
  const {
    calendarDays,
    selectedDate,
    setSelectedDate,
    activeDate,
    setActiveDate,
    formattedDateTitle
  } = useCalendarWidget();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="calendar-widget__wrapper">
      <div className="calendar-widget__description">
        <Text>{formattedDateTitle}</Text>
        <Text type="small" className="calendar-widget__description-badge">
          <img src={van} alt="van" />
          Earliest delivery
        </Text>
      </div>
      <div className="calendar-widget__calendar">
        <div className="calendar-widget__calendar-icon">
          <img src={calendar} alt="calendar" />
          <Text type="small" className="calendar-widget__calendar-date">
            {selectedDate.getDate()}
          </Text>
        </div>
        <div
          className="calendar-widget__calendar-btn"
          onClick={() => setIsModalOpen(true)}
        >
          <Text>Change</Text>
        </div>

        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
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
    </div>
  );
};

export default CalendarWidget;
