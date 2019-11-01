import React from "react";

// components
import Title from "components/elements/Typography/Title";
import Text from "components/elements/Typography/Text";
import CalendarWidget from "features/delivery/components/CalendarWidget";

// styles
import "features/delivery/components/DeliveryDayWidget/DeliveryDayWidget.scss";

const DeliveryDayWidget = () => {
  return (
    <div className="delivery-widget__wrapper">
      <div className="delivery-widget__header">
        <Title>Choose your delivery day</Title>
        <Text type="small" className="delivery-widget__description">
          Delivery is always free
        </Text>
      </div>
      <CalendarWidget />
    </div>
  );
};

export default DeliveryDayWidget;
