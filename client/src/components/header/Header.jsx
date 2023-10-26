import React from "react"
import cl from "./Header.module.css"
import Logo from "./header-comp/Logo";
import Search from "./header-comp/Search";
import Info from "./header-comp/Info";

const Header = () => {
  return (
    <header className={cl.header}>
      <Logo />
      <Search />
      <Info />
    </header>
  )
};

export default Header;
