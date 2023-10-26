import React from "react"
import cl from './Logo.module.css'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={cl.logo_title}>
        <span className="material-symbols-outlined">auto_awesome</span>
        <Link to="/" className="clean_styles_a">
            <div className={cl.title_block}>
                <span>Pin</span>
                <span style={{fontSize: "20px"}} className={cl.title300}>deresd</span>
            </div>
        </Link>
    </div>
  )
};

export default Logo;
