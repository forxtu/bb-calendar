type UseCalendarControls = {
  onModalClose: any;
  activeDate: any;
  selectedDate: any;
  setSelectedDate: (x: any) => void;
};

const useCalendarControls = ({
  onModalClose,
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
