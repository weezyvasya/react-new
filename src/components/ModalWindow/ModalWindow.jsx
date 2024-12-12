import { useState } from "react";
import "./ModalWindow.css";

function ModalWindow() {
  const [show, setShow] = useState(false);
  function open() {
    setShow(true);
  }
  function close(){
    setShow(false)
  }
  return (
    <>
      <div>
        <button onClick={open}>Modal Window</button>
        {show ? (
          <div onClick={close} className="overlay">
            <div onClick={(e)=> e.stopPropagation()} className="modal">
              <p>Модальное окно</p>
              <button onClick={close}>Закрыть модальное окно</button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ModalWindow;
