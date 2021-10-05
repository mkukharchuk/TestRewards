import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, ModalWrapper } from './Modal.styled';

export const Modal = ({
  show, close, children,
}) => ReactDOM.createPortal(
  <>
    {
     show
       ? (
         <ModalContainer
           onClick={() => close()}
         >
           <ModalWrapper onClick={(e) => e.stopPropagation()}>
             <main className="modal_content">
               {children}
             </main>

           </ModalWrapper>
         </ModalContainer>
       )
       : null
     }
  </>,
  document.getElementById('modal'),

);
