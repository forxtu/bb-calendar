import React from "react";

// components
import Text from "components/elements/Typography/Text";

// styles
import van from "assets/images/van.svg";

type DeliveryDayButtonDesc = {
  formattedDateTitle: string;
};

const DeliveryDayButtonDesc = ({
  formattedDateTitle
}: DeliveryDayButtonDesc) => (
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
);

export default DeliveryDayButtonDesc;
