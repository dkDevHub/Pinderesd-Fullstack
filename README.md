Frontend: React, Redux Toolkid, RTK Query

Backend: NodeJS, Express, MongoDB

Functional: auth with JWT and hashing passwords in db, like/save/views count/history posts, everyone user can create own post, tags, finters, infinite scroll, 

This project has:


Adaptive design

Infinite Scroll - look at: hooks/useInfiniteScroll.js, pages/Main.jsx

Cashing request to server - RTK Query responsible for this

Data Validation (on server side) - look at: /router/userRouter.js (express-validator)

Custom Error&Auth Middleware - look at: /middlewares

JWT Authorization (access + refresh token) - look at: user-service.js, token-servive, auth-middleware

Confirm email - look at: main-service ( in this version logic cut out, check: /server/.env )


Also in this project was used: axios with Action Creator, in Auth logic, look at: service/UserService.js, store/reducer/AuthActionCreator.js
I wanted to do everything using RTK Query, but I decided to do both for clarity.

![Screenshot1](https://github.com/dkDevHub/Pinderesd-Fullstack/assets/112325695/4d48658d-1d7f-4f8f-b6bd-2e22ad16cc5c)
![Screenshot2](https://github.com/dkDevHub/Pinderesd-Fullstack/assets/112325695/06eed491-8b6c-492d-975c-44e892ea9515)
![Screenshot3](https://github.com/dkDevHub/Pinderesd-Fullstack/assets/112325695/b91881b4-3241-412f-a8ac-25a0f1794c7b)
![Screenshot4](https://github.com/dkDevHub/Pinderesd-Fullstack/assets/112325695/8f52df64-39ca-4790-960d-dd1e0c065948)
![Screenshot5](https://github.com/dkDevHub/Pinderesd-Fullstack/assets/112325695/2b8fecae-fbf0-48d2-b5d3-6bfb6f9e49e7)

