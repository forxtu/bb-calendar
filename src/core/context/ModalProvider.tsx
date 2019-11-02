import React, { useState, useEffect, useRef, createContext } from "react";

export const ModalContext = createContext(null);

type ModalProvider = {
  children: any;
};

const ModalProvider = ({ children }: ModalProvider) => {
  const modalRef = useRef<any>();
  const [modalContext, setModalContext] = useState();

  useEffect(() => {
    setModalContext(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={modalContext}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
};

export default ModalProvider;
