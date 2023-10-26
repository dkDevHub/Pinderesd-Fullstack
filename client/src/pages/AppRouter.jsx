import React from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRouters, publicRouters } from "../router/routers";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const {isAuth} = useSelector(store => store.authReducer)

  return (
    isAuth ? 
    <Routes>
      {privateRouters.map(route => 
        <Route key={route.path} path={route.path} element={<route.element />} />
      )}
      {publicRouters.map(route => 
        <Route key={route.path} path={route.path} element={<route.element />} />
      )}
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
    :
    <Routes>
      {publicRouters.map(route => 
        <Route key={route.path} path={route.path} element={<route.element />} />
      )}
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  )
};

export default AppRouter;
