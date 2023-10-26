import React from "react"
import cl from "./Search.module.css"
import { useSelector } from "react-redux";

const Search = () => {
  const {bottomMenuIsActive} = useSelector(store => store.componentsReducer)
  const rootClass = bottomMenuIsActive ? [cl.search_container, cl.search_container_hide] : [cl.search_container];
  
  return (
    <div className={rootClass.join(' ')}>
        <i className="fa fa-search" style={{color: "#3f3f46", width: "50px", textAlign: "center"}}></i>
        <input className={cl.search} name="Search" type="search" placeholder="Search by artist, gallery, style, theme, tag, etc." />
    </div>
  )
};

export default Search;
