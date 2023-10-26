import React from "react"
import cl from './Modal.module.css'
//import { disableScroll, enableScroll } from "../../API/utils";

const Modal = ({active, setActive, children}) => {
  const rootClassModal = active ? [cl.modal, cl.active] : [cl.modal]
  const rootClassModalContent = active ? [cl.modal_content, cl.active] : [cl.modal_content]

//   useEffect(() => {
//     active ? disableScroll(): enableScroll();
//     return enableScroll
//   }, [active])

  return (
    <div className={rootClassModal.join(' ')} onClick={() => setActive(false)}>
      <div className={rootClassModalContent.join(' ')} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
};

export default Modal;
