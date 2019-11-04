import React from "react";

// components
import Title from "components/elements/Typography/Title";
import Text from "components/elements/Typography/Text";
import DeliveryDayButton from "features/delivery/components/DeliveryDayButton";

// styles
import "features/delivery/components/DeliveryDayWidget/DeliveryDayWidget.scss";

const DeliveryDayWidget = () => (
  <div className="delivery-widget__wrapper">
    <div className="delivery-widget__header">
      <Title>Choose your delivery day</Title>
      <Text type="small" className="delivery-widget__description">
        Delivery is always free
      </Text>
    </div>
    <DeliveryDayButton />
  </div>
);

export default DeliveryDayWidget;
