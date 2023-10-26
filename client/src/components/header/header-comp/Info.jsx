import React from "react"
import PremiumButton from "./info-comp/PremiumButton";
import cl from "./Info.module.css"
import InfoButton from "./info-comp/InfoButton";
import { useDispatch, useSelector } from "react-redux";
import { setAccountMenuIsActive, setAuthModalIsActive } from "../../../store/reducers/ComponentsStateSlice";

const Info = () => {
  const { isAuth } = useSelector(store => store.authReducer)
  const dispatch = useDispatch()

  return (
    <div className={cl.info}>
        <div className={cl.info_button}>
            {
              isAuth ? 
                <>
                  <PremiumButton />
                  <InfoButton onClick={() => dispatch(setAccountMenuIsActive(true))}>Account</InfoButton>
                </>
              :
                <>
                  <InfoButton onClick={() => dispatch(setAuthModalIsActive(true))}>Log in</InfoButton>
                </>
            }
        </div>
    </div>
  )
};

export default Info;
