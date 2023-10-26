import React, { useEffect } from "react"
import cl from "./BottomMenu.module.css"
import Anchor from "./bottom_menu_comp/Anchor";
import Trend from "./bottom_menu_comp/Trend";
import Filter from "./bottom_menu_comp/Filter";
import { useDispatch, useSelector } from "react-redux";
import { setBottomMenuIsActive } from "../../store/reducers/ComponentsStateSlice";

const BottomMenu = () => {
  const dispatch = useDispatch()
  const {bottomMenuIsActive} = useSelector(store => store.componentsReducer)
  const rootClass = bottomMenuIsActive ? [cl.bottom_menu, cl.show_menu] : [cl.bottom_menu, cl.hide_menu];
  
  const checkScroll = () => {
    window.scrollY >= 400 ? dispatch(setBottomMenuIsActive(true)) : dispatch(setBottomMenuIsActive(false));
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("scroll", checkScroll)
    
    return () => window.removeEventListener("scroll", checkScroll);
  }, [])
  
  return (
    <div className={rootClass.join(' ')}>
        <Anchor />
        <Trend />
        <Filter />
    </div>
  )
};

export default BottomMenu;
