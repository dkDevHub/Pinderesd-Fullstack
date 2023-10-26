const Router = require('express').Router;
const statsController = require('../controllers/stats-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const router = new Router();

router.get('/get/:id', authMiddleware, statsController.getStats);
router.put('/like/:id', authMiddleware, statsController.like);
router.put('/save/:id', authMiddleware, statsController.save);


module.exports = router