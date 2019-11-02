import React from "react";

// utils
import ModalProvider from "core/context/ModalProvider";

// components
import DeliveryDayWidget from "features/delivery/components/DeliveryDayWidget";

const App = () => (
  <ModalProvider>
    <DeliveryDayWidget />
  </ModalProvider>
);

export default App;
