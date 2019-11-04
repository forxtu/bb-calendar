type UseCalendarControls = {
  activeDate: Date;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  onModalClose?: () => void;
};

const useCalendarControls = ({
  onModalClose = () => {},
  activeDate,
  selectedDate,
  setSelectedDate
}: UseCalendarControls) => {
  const handleSelectDateConfirm = () => {
    onModalClose();
    setSelectedDate(activeDate);
  };

  const handleSelectDateCancel = () => {
    onModalClose();
    setSelectedDate(selectedDate);
  };

  return {
    handleSelectDateConfirm,
    handleSelectDateCancel
  };
};

export default useCalendarControls;
