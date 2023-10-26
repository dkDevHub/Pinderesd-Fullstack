Frontend: React, Redux Toolkid, RTK Query
Backend: NodeJS, Express, MongoDB

This project has:

Infinite Scroll - look at: hooks/useInfiniteScroll.js, pages/Main.jsx
Cashing request to server - RTK Query responsible for this
Data Validation (on server side) - look at: /router/userRouter.js (express-validator)
Custom Error&Auth Middleware - look at: /middlewares
JWT Authorization (access + refresh token) - look at: user-service.js, token-servive, auth-middleware
Confirm email - look at: main-service ( in this version logic cut out, check: /server/.env )

Also in this project was used: axios with Action Creator, in Auth logic, look at: service/UserService.js, store/reducer/AuthActionCreator.js
I wanted to do everything using RTK Query, but I decided to do both for clarity.
