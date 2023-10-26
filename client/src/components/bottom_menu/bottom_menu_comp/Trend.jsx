import React from "react"
import cl from "./BottomMenuButtons.module.css"
import { useDispatch, useSelector } from "react-redux";
import { setTrendOrLatestSort } from "../../../store/reducers/ComponentsStateSlice";

const Trend = () => {
  const {trendOrLatestSort: buttonState} = useSelector(store => store.componentsReducer)
  const dispatch = useDispatch()

  const trendCl = buttonState === 'trend' ? `${cl.trend} ${cl.active_btn}` : cl.trend;
  const latestCl = buttonState === 'latest' ? `${cl.latest} ${cl.active_btn}` : cl.latest;

  return (
    <div className={cl.trend_latest}>
        <div onClick={() => dispatch(setTrendOrLatestSort('trend'))} className={trendCl}>Trend</div>
        <div onClick={() => dispatch(setTrendOrLatestSort('latest'))} className={latestCl}>Latest</div>
    </div>
  )
};

export default Trend;
