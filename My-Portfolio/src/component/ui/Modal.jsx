import React, { useEffect } from "react";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);
  return (
    <div className="ui-modal-overlay" onClick={onClose}>
      <div className="ui-modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

