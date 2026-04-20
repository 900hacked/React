import { createPortal } from "react-dom";
import "./porat2.scss";

function Portaltwo({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <>
      <div>
        <h1>MY FIRST REACT PORTAL</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.body,
  );
}

export default Portaltwo;
