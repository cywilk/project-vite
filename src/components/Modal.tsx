import { createPortal } from 'react-dom';
import React from 'react';
import { useState } from 'react';

const modalRoot = document.getElementById('modal')

export default function Modal() {
  // access modal root element with
  // this is where the modal should be rendered and destroyed

  const [isOpen, setIsOpen] = useState(false);
  
  {
    // TODO: conditionally show this based on open state
    }
    const showModal = isOpen ? (
      createPortal(
        <div>
          {
            // TODO: style with the specifications given in the README
          }
          <div className="modalContent">
            <button onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>,
        modalRoot as Element,
    )) : null;

  return (
    <>
      {
        // TODO: handle button click to change state
        
      }
      <button onClick={() => setIsOpen(true)} className="modalButton">
        Click Me!
      </button>
      {showModal}
    </>
  )
}
