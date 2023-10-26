import React from "react"
import cl from "./Theme.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalIsActive } from "../../store/reducers/ComponentsStateSlice";


const ThemeButton = ({children, ...props}) => {
  const { isAuth } = useSelector(store => store.authReducer)
  const dispatch = useDispatch()
  const style_str = `url("${props.url}")`
  const link = '/posts?collection=theme&name=' + children.replace(' ', '+')

  if (!isAuth) return (
    <div onClick={() => dispatch(setAuthModalIsActive(true))} className={cl.theme_block}>
        <div className={cl.theme} style={{backgroundImage: style_str}}></div>
        <div className={cl.theme_name}>{children}</div>
    </div>
  )

  return (
    <Link to={link} className={cl.theme_block}>
        <div className={cl.theme} style={{backgroundImage: style_str}}></div>
        <div className={cl.theme_name}>{children}</div>
    </Link>
  )
};

export default ThemeButton;
