import React from "react"
import cl from "./Theme.module.css"
import ThemeButton from "./ThemeButton";
import { getThemes } from "../../funcs/themesList";

const Theme = () => {
  const themeList = getThemes()
  return (
    <div className={cl.theme_container}>
        {themeList.map((t, i) =>
            <ThemeButton key={i} url={t.url} >{t.name}</ThemeButton>
        )}
    </div>
  )
};

export default Theme;
