import { useState, useEffect, useContext } from "react";

// utils
import { ModalContext } from "core/context/ModalProvider";

type UseModal = {
  isModalOpen: boolean;
  onClose: () => void;
};

const useModal = ({ isModalOpen, onClose }: UseModal) => {
  const modalNode = useContext(ModalContext);

  const [fadeType, setFadeType] = useState<string | null>(null);

  const handleTransitionEnd = (e: TransitionEvent) => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;

    if (fadeType === "out") {
      onClose();
    }
  };

  const handleClose = () => {
    setFadeType("out");
  };

  useEffect(() => {
    setTimeout(() => setFadeType("in"), 0);
  }, []);

  useEffect(() => {
    setFadeType("out");
  }, [isModalOpen]);

  return {
    modalNode,
    handleClose,
    handleTransitionEnd,
    fadeType
  };
};

export default useModal;
