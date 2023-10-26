import React, { useState } from "react"
import cl from "./PremiumButton.module.css"
import { useSelector } from "react-redux";
import Modal from "../../../UI/Modal";

const PremiumButton = () => {
  const {bottomMenuIsActive} = useSelector(store => store.componentsReducer)
  const rootClass = bottomMenuIsActive ? [cl.premium, cl.premium_hide] : [cl.premium];
  const [ active, setActive ] = useState(false)

  return (
    <div className={cl.premium_bl}>
        <span onClick={() => setActive(true)} className={rootClass.join(' ')}>
            <span className={cl.premium_text}>Get Premium</span>
        </span>
        <Modal active={active} setActive={setActive} ><span>Functional is not done</span></Modal>
    </div>
  )
};

export default PremiumButton;
