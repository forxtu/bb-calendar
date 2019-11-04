import React from "react";

// hooks
import useCalendarControls from "features/delivery/components/Calendar/CalendarControls/useCalendarControls";

// components
import Button from "components/elements/Button";

// styles
import "features/delivery/components/Calendar/CalendarControls/CalendarControls.scss";

type CalendarControls = {
  onModalClose: any;
  activeDate: any;
  selectedDate: any;
  setSelectedDate: (x: any) => void;
};

const CalendarControls = ({
  onModalClose,
  activeDate,
  selectedDate,
  setSelectedDate
}: CalendarControls) => {
  const {
    handleSelectDateConfirm,
    handleSelectDateCancel
  } = useCalendarControls({
    onModalClose,
    activeDate,
    selectedDate,
    setSelectedDate
  });

  return (
    <div className="calendar__controls">
      <Button onClick={handleSelectDateCancel} type="link" size="small">
        CANCEL, <br />
        DON'T CHANGE
      </Button>
      <Button size="small" onClick={handleSelectDateConfirm}>
        CHANGE DATE
      </Button>
    </div>
  );
};

export default CalendarControls;
