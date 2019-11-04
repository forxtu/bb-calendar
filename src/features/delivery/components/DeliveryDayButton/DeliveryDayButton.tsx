import React, { useState } from "react";

// hooks
import useDeliveryDayButton from "features/delivery/components/DeliveryDayButton/useDeliveryDayButton";

// components
import DeliveryDayButtonDesc from "features/delivery/components/DeliveryDayButton/DeliveryDayButtonDesc";
import DeliveryDayButtonCalendar from "features/delivery/components/DeliveryDayButton/DeliveryDayButtonCalendar";

// styles
import "features/delivery/components/DeliveryDayButton/DeliveryDayButton.scss";

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
      <DeliveryDayButtonDesc formattedDateTitle={formattedDateTitle} />
      <DeliveryDayButtonCalendar
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        calendarDays={calendarDays}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      />
    </div>
  );
};

export default DeliveryDayButton;
