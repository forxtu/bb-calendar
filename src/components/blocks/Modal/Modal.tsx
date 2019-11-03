import React, { useRef, cloneElement, ReactElement } from "react";
import ReactDOM from "react-dom";

// hooks
import useClickOutside from "hooks/useClickOutside";
import useModal from "components/blocks/Modal/useModal";

// styles
import "components/blocks/Modal/Modal.scss";

type Modal = {
  isModalOpen: boolean;
  children: ReactElement;
  onClose: () => void;
};

const Modal = ({ isModalOpen, onClose, children }: Modal) => {
  const { modalNode, handleClose, handleTransitionEnd, fadeType } = useModal({
    onClose,
    isModalOpen
  });

  const modalContentRef = useRef(null);

  useClickOutside<HTMLLIElement>(
    modalContentRef as HTMLDivElement & null,
    handleClose
  );

  return modalNode
    ? ReactDOM.createPortal(
        <div
          className={`modal__wrapper fade-${fadeType}`}
          onTransitionEnd={handleTransitionEnd as () => void}
        >
          <div className="modal__overflow" />
          <div ref={modalContentRef} className="modal__content">
            {cloneElement(children, { handleClose })}
          </div>
        </div>,
        modalNode as HTMLDivElement & null
      )
    : null;
};

export default Modal;
