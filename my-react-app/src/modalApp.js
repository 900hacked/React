import Modal from "./modal";
import { useState } from "react";

function Appss() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        onDiscard={() => {
          alert("Changes discarded!");
          setOpen(false);
        }}
      />
    </div>
  );
}

export default Appss;
