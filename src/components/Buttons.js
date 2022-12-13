import React, { useState } from "react";
import PaymentsModal from "./PaymentsModal";
import "./Buttons.css";
import { type } from "@testing-library/user-event/dist/type";

export const Buttons = () => {
  const [modalState, setModalState] = useState({
    type: "",
    open: false,
  });

  return (
    <div>
      <div className="buttons">
        <button
          className="button"
          onClick={() =>
            //console.log("This button will open a modal to send a payment")
            setModalState({ type: "send", open: true })
          }
        >
          Send
        </button>
        <button
          className="button"
          onClick={() =>
            //console.log("This button will open a modal to receive a payment")
            setModalState({ type: "receive", open: true })
          }
        >
          Receive
        </button>
      </div>
      <PaymentsModal modalState={modalState} setModalState={setModalState} />
    </div>
  );
};

export default Buttons;
