import React from "react"
import cl from './Banner.module.css'
import Style from "./style/Style";

const Banner = () => {
  return (
    <div className={cl.banner}>
        <div className={cl.banner_title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
        <Style />
    </div>
  )
};

export default Banner;
