import React from "react"
import cl from "./BottomMenuButtons.module.css"
import { smoothScrollUp } from "../../../funcs/utils";

const Anchor = () => {
  return (
    <div onClick={smoothScrollUp} className={cl.btn_up} anchor="#page_begin">
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </div>
  )
};

export default Anchor;
