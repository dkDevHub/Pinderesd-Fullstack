const Router = require('express').Router;
const postController = require('../controllers/post-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const {body} = require('express-validator');

const router = new Router();

router.post('/posts',
    body('name').isLength({min: 1, max: 60}),
    body('description').isLength({min: 1, max: 300}),
    authMiddleware,
    postController.create
);
router.put('/posts', authMiddleware, postController.update);
router.delete('/posts/:id', authMiddleware, postController.delete);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', authMiddleware, postController.getOne);
router.get('/collection', authMiddleware, postController.getCollection);
router.get('/style/:id', postController.getStyle);
router.get('/theme/:id', postController.getTheme);

module.exports = router