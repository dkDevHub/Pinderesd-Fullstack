const Router = require('express').Router;
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')
const statsRouter = require('./statsRouter')

const router = new Router();

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/stats', statsRouter)

module.exports = router