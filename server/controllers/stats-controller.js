const ApiError = require('../exceptions/api-error');
const statsService = require('../service/stats-service');

class StatsController {
    async getStats (req, res, next) {
        try {

            const postId = req.params.id
            const postStats = await statsService.getStats(postId)
            return res.json(postStats)
        } catch (e) {
            next(e)
        }
    }

    async like (req, res, next) {
        try {

            const userId = req.user.id
            const postId = req.params.id
            const postStats = await statsService.like(userId, postId)
            return res.json(postStats)
        } catch (e) {
            next(e)
        }
    }

    async save (req, res, next) {
        try {

            const userId = req.user.id
            const postId = req.params.id
            const postStats = await statsService.save(userId, postId)
            return res.json(postStats)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new StatsController();