import { createPortal } from "react-dom";
import "./modal.scss";
function Modal({ isOpen, onClose, onDiscard }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Unsaved Changes</h2>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>

        <div className="modal-body">
          <p>
            You may have unsaved changes in the opened workspace. Do you want
            discard changes?
          </p>
        </div>

        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="discard-button" onClick={onDiscard}>
            Discard
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
