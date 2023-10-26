import React, { useState } from "react"
import cl from "./LoginForm.module.css"
import useInput from "../../hooks/useInput"
import { useDispatch, useSelector } from "react-redux";
import { login, registration } from "../../store/reducers/AuthActionCreator";

const LoginForm = () => {
  const dispatch = useDispatch() 
  const { user, isAuth, error } = useSelector(store => store.authReducer)
  const [haveAccount, setHaveAccount] = useState(true)

  const email = useInput('')
  const password = useInput('')
  const username = useInput('')

  const loginUser = () => {
    dispatch(login({email: email.value, password: password.value}))
  }

  const registrationUser = () => {
    dispatch(registration({username: username.value, email: email.value, password: password.value}))
  }

  if (isAuth) return(
    <div className={cl.form}>
      <span className="material-symbols-outlined">auto_awesome</span>
      <div className={cl.welcome}>Welcome, <span>{user.username}!</span></div>
    </div>
  )

  return (
    <div className={cl.form}>
      <div className={cl.title}>
        {haveAccount ? <>Login</> : <>Reg</>} on <span>Pinderesd</span>
      </div>
      {
        haveAccount ? 
          <></>
        :
          <input className={cl.input} {...username} type="text" placeholder="username" />
      }
      <input className={cl.input} {...email} type="text" placeholder="email" />
      <input className={cl.input} {...password} type="text" placeholder="password" />
      {
        error ? 
          <div className={cl.error}>{error}</div>
        :
          <></>
      }
      {
        haveAccount ? 
          <button className={cl.button} onClick={loginUser} >Login</button>
        :
          <button className={cl.button} onClick={registrationUser} >Register</button>
      }
      {
        haveAccount ? 
          <div onClick={() => setHaveAccount(false)} className={cl.reg}>Create account</div>
        :
          <div onClick={() => setHaveAccount(true)} className={cl.reg}>I have account</div>
      }
    </div>
  )
};

export default LoginForm;
