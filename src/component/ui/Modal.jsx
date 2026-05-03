import React, { useEffect } from "react";

const Modal = ({ open, onClose, children }) => {
	useEffect(() => {
		if (!open) return;
		document.body.classList.add("no-scroll");
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [open]);

	if (!open) return null;

	return (
		<div className="project-modal-overlay" onClick={onClose}>
			<div className="project-modal" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;

