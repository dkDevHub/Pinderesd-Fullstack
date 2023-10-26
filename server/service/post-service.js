const FileService = require("./file-service")
const PostModel = require("../models/post-model");
const ApiError = require("../exceptions/api-error");
const statsService = require("./stats-service");
const StatsModel = require("../models/stats-model");
const userService = require("./user-service");

class PostService {
    async create (postData, file, authorId) {
        if (!file) throw ApiError.BadRequest("Picture not upload")
        if (postData.size.lenght < 3) throw ApiError.BadRequest("Size is missing")
        
        //await FileService.convertToJpg(file)
        const fileName = FileService.saveFile(file)
        postData.tags = postData.tags.split(', ')
        const createdPost = await PostModel.create({...postData, date: Date.now(), author: authorId, picture: fileName})
        
        return createdPost
    }

    async update () {

        throw ApiError.BadRequest("Service is not done")
    }

    async delete () {
        
    }

    async getAll () {
        const posts = await PostModel.find()
        return posts
    }

    async getLatestPosts (page, limit) {
        const posts = await PostModel.find().sort('-date').limit(limit).skip( limit*(page-1) )
        return posts
    }

    async getTrendPosts (page, limit) {
        const posts = await PostModel.find().sort('-like').limit(limit).skip( limit*(page-1) )
        return posts
    }

    async getOne (postId, userId) {
        if (!postId) throw ApiError.BadRequest("Id is missing")
        const post = await PostModel.findById(postId)
        await statsService.view(postId)
        await userService.addToHistory(postId, userId)
        return post
    }

    async getMyPosts(userId) {

        const posts = await PostModel.find().where('author').equals(userId)
        return posts
    }    

    async getLiked(userId) {
        
        const postsId = await StatsModel.find({ users_like: { "$in" : [userId]} });
        const postsIdArr = postsId.map((i) => i.post)
        const posts = await PostModel.find().where('_id').in(postsIdArr)

        return posts
    }

    async getSaved(userId) {

        const postsId = await StatsModel.find({ users_save: { "$in" : [userId]} });
        const postsIdArr = postsId.map((i) => i.post)
        const posts = await PostModel.find().where('_id').in(postsIdArr)

        return posts
    }
    
    async getStyle(style) {

        const posts = await PostModel.find().where('style').equals(style)
        return posts
    }
    
    async getTheme(theme) {

        const posts = await PostModel.find().where('theme').equals(theme)
        return posts
    }
    
}

module.exports = new PostService();