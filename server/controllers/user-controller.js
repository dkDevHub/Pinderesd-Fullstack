const userService = require('../service/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');

class UserController {
    async registration (req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return next(ApiError.BadRequest('Validation error', errors.array()))

            const {username, email, password} = req.body;
            const userData = await userService.registration(username, email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json(userData); 
        } catch (e) {
            next(e)
        }
    }

    async login (req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json(userData);
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async refresh (req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e)
        }
    }

    async getAllUsers (req, res, next) {
        try {
            const users = await userService.getAllUsers()
            return res.json(users);
        } catch (e) {
            next(e)
        }
    }

    async getUser (req, res, next) {
        try {
            const id = req.params.id
            const user = await userService.getUser(id)
            return res.json(user);
        } catch (e) {
            next(e)
        }
    }

    async getHistory (req, res, next) {
        try {
            const id = req.user.id
            const posts = await userService.getHistory(id)
            return res.json(posts);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController();