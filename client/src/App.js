import React, { useEffect } from 'react';
import './style/App.css'
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from './store/reducers/AuthActionCreator';
import AccountMenu from './components/account_menu/AccountMenu';
import AppRouter from './pages/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Loading from './components/UI/Loading';

function App() {
  const dispatch = useDispatch()
  const { isAuth, isLoading } = useSelector(store => store.authReducer)
  
  useEffect(() => {
    dispatch(refresh())
  }, [])

  if (isLoading) return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Loading />
      </div>
    </BrowserRouter>
  );
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRouter />
        { isAuth ? <AccountMenu /> : <></> }
      </div>
    </BrowserRouter>
  );
}

export default App;
