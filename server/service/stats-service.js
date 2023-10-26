const StatsModel = require("../models/stats-model");
const ApiError = require("../exceptions/api-error");

const getOrCreateStats = async (postId) => {
    if ( !postId ) throw ApiError.BadRequest('Incorrect post Id')

    const postStats = await StatsModel.findOne({post: postId})

    // if statistics do not exist, create and return her 
    if ( !postStats ) {
        const createdStats = StatsModel.create({
            post: postId,
        })
        return createdStats
    }

    return postStats
}

class PostService {
    async getStats (postId) {

        const postStats = await getOrCreateStats(postId)
        return postStats
    }

    async like (userId, postId) {
        const postStats = await getOrCreateStats(postId)

        if (postStats.users_like.indexOf(userId) == -1) {
            // like
            postStats.users_like.push(userId)
            return postStats.save()
        } else {
            // unlike
            postStats.users_like = postStats.users_like.filter(id => id.toString() !== userId)
            return postStats.save()
        }
    }

    async save (userId, postId) {
        const postStats = await getOrCreateStats(postId)
        
        if (postStats.users_save.indexOf(userId) == -1) {
            // save
            postStats.users_save.push(userId)
            return postStats.save()
        } else {
            // unsave
            postStats.users_save = postStats.users_save.filter(id => id.toString() !== userId)
            return postStats.save()
        }
    }

    async view (postId) {
        const postStats = await getOrCreateStats(postId)

        postStats.views = postStats.views + 1
        await postStats.save()
    }
    
}

module.exports = new PostService();