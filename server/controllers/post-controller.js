const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');
const postService = require('../service/post-service');

class PostController {
    async create (req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return next(ApiError.BadRequest('Validation error', errors.array()))
           
            const authorId = req.user.id
            const file = req.files.picture
            const postData = await postService.create(req.body, file, authorId)
            return res.json(postData); 
        } catch (e) {
            next(e)
        }
    }

    async update (req, res, next) {
        try {
            const posts = await postService.update()
            return res.json(posts)
        } catch (e) {
            next(e)
        }
    }

    async delete (req, res, next) {
        try {
            
        } catch (e) {
            next(e)
        }
    }

    async getAll (req, res, next) {
        try {
            const posts = await postService.getAll()
            return res.json(posts)
        } catch (e) {
            next(e)
        }
    }

    async getPosts (req, res, next) {
        try {
            const page = req.query.page
            const limit = req.query.limit
            const sort = req.query.sort
            let posts = []

            if (sort == 'latest') posts = await postService.getLatestPosts(page, limit)
            if (sort == 'trend') posts = await postService.getTrendPosts(page, limit)
            
            return res.json(posts)
        } catch (e) {
            next(e)
        }
    }

    async getOne (req, res, next) {
        try {
            const userId = req.user.id
            const postId = req.params.id
            const post = await postService.getOne(postId, userId)
            return res.json(post)
        } catch (e) {
            next(e)
        }
    }

    async getCollection (req, res, next) {
        try {
            const userId = req.user.id
            const collection = req.query.collection

            let posts = []

            if (collection == 'liked') posts = await postService.getLiked(userId)
            if (collection == 'saved') posts = await postService.getSaved(userId)
            if (collection == 'histore') posts = []
            if (collection == 'myposts') posts = await postService.getMyPosts(userId)
            if (collection == 'style') posts = await postService.getStyle(req.query.name.replace('+', ' '))
            if (collection == 'theme') posts = await postService.getTheme(req.query.name.replace('+', ' '))


            return res.json(posts);
        } catch (e) {
            next(e)
        }
    }

    async getStyle (req, res, next) {
        try {
            
        } catch (e) {
            next(e)
        }
    }

    async getTheme (req, res, next) {
        try {
            
        } catch (e) {
            next(e)
        }
    }

    async getLatest (req, res, next) {
        try {
            
        } catch (e) {
            next(e)
        }
    }

    async getRecommented (req, res, next) {
        try {
            
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new PostController();