import React from "react"
import cl from "./Style.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalIsActive } from "../../../store/reducers/ComponentsStateSlice";

const StyleButton = ({children}) => {
  const { isAuth } = useSelector(store => store.authReducer)
  const dispatch = useDispatch()
  const link = '/posts?collection=style&name=' + children.replace(' ', '+')

  if (!isAuth) return (
    <div onClick={() => dispatch(setAuthModalIsActive(true))} className={cl.styles}>
        {children}
    </div>
  )

  return (
    <Link to={link} className={cl.styles}>
        {children}
    </Link>
  )
};

export default StyleButton;
