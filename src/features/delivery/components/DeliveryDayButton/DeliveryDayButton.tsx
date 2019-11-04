import React, { useState } from "react";

// hooks
import useDeliveryDayButton from "features/delivery/components/DeliveryDayButton/useDeliveryDayButton";

// components
import Text from "components/elements/Typography/Text";
import Modal from "components/blocks/Modal";
import Calendar from "features/delivery/components/Calendar";

// styles
import "features/delivery/components/DeliveryDayButton/DeliveryDayButton.scss";
import van from "assets/images/van.svg";
import calendar from "assets/images/calendar.svg";

const DeliveryDayButton = () => {
  const {
    calendarDays,
    selectedDate,
    setSelectedDate,
    activeDate,
    setActiveDate,
    formattedDateTitle
  } = useDeliveryDayButton();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="delivery-day-button__wrapper"
      onClick={() => setIsModalOpen(true)}
    >
      <div className="delivery-day-button__description">
        <Text>{formattedDateTitle}</Text>
        <Text type="small" className="delivery-day-button__description-badge">
          <span className="delivery-day-button__icon-line" />
          <span className="delivery-day-button__icon-line" />
          <span className="delivery-day-button__icon-line" />
          <img src={van} alt="van" />
          Earliest delivery
        </Text>
      </div>
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

export default DeliveryDayButton;
