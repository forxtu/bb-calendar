import React, { useState } from "react";

// components
import Text from "components/elements/Typography/Text";
import Modal from "components/blocks/Modal";

// styles
import "features/delivery/components/CalendarWidget/CalendarWidget.scss";
import van from "assets/images/van.svg";
import calendar from "assets/images/calendar.svg";

const CalendarWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="calendar-widget__wrapper">
      <div className="calendar-widget__description">
        <Text>Thurst March 14</Text>
        <Text type="small" className="calendar-widget__description-badge">
          <img src={van} alt="van" />
          Earliest delivery
        </Text>
      </div>
      <div className="calendar-widget__calendar">
        <div className="calendar-widget__calendar-icon">
          <img src={calendar} alt="calendar" />
          <Text type="small" className="calendar-widget__calendar-date">
            14
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
            <p>Calendar</p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default CalendarWidget;
