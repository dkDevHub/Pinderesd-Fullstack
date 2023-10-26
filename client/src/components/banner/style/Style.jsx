import React from "react"
import cl from "./Style.module.css"
import StyleButton from "./StyleButton";
import { getStyles } from "../../../funcs/themesList";

const Style = () => {
  const styleList = getStyles()

  return (
    <div className={cl.styles_container}>
        {styleList.map((s, i) => 
            <StyleButton key={i}>{s}</StyleButton>
        )}
    </div>
  )
};

export default Style;
