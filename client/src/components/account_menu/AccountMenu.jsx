import React from "react"
import cl from "./AccountMenu.module.css"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/reducers/AuthActionCreator";
import { setAccountMenuIsActive } from "../../store/reducers/ComponentsStateSlice";
import { Link } from "react-router-dom";

const AccountMenu = () => {
  const dispatch = useDispatch()
  const { user, isAuth } = useSelector(store => store.authReducer)
  const { accountMenuIsActive } = useSelector(store => store.componentsReducer)

  const rootContainerClass = accountMenuIsActive ? [cl.menu_container, cl.active] : [cl.menu_container]
  const rootClass = accountMenuIsActive ? [cl.menu, cl.active] : [cl.menu]
  
  const logoutUser = () => {
    dispatch(logout())
    dispatch(setAccountMenuIsActive(false))
  }

  if (isAuth) return (
    <div className={rootContainerClass.join(' ')} onClick={() => dispatch(setAccountMenuIsActive(false))}>
      <div className={rootClass.join(' ')} onClick={e => e.stopPropagation()}>
        <div className={[cl.menu_elem, cl.username].join(' ')}>@{user.username}</div>
        <div className={[cl.menu_elem, cl.email].join(' ')}>{user.email}</div>
        <div className={cl.menu_elems}>
          <Link to={`/posts?collection=myposts`} className={cl.menu_elem}><span style={{color: "#24d15b"}} class="material-symbols-outlined">image</span>My Posts</Link>
          <Link to={`/posts?collection=saved`} className={cl.menu_elem}><span style={{color: "#FEDE00"}} class="material-symbols-outlined">bookmark</span>Saves</Link>
          <Link to={`/posts?collection=liked`} className={cl.menu_elem}><span style={{color: "#ff0055"}} class="material-symbols-outlined">favorite</span>Liked</Link>
          <Link to={`/create`} className={cl.menu_elem}><span style={{color: "#bababa"}} class="material-symbols-outlined">palette</span>Create Post</Link>
          <Link to={`/history`} className={cl.menu_elem}><span style={{color: "#2492d1"}} class="material-symbols-outlined">history</span>History</Link>
          <Link to={`/settings`} className={cl.menu_elem}><span style={{color: "#bababa"}} class="material-symbols-outlined">tune</span>Settings</Link>
          <div onClick={logoutUser} className={cl.menu_elem}>Logout</div>
        </div>
      </div>
    </div>
  )

  return (
    <></>
  )
};

export default AccountMenu;
