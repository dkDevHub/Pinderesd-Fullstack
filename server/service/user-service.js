const UserModel = require("../models/user-model");
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const postModel = require("../models/post-model");
//const mailService = require("./mail-service"); // this service is responsible for sending mails

const arraymove = (arr, fromIndex, toIndex) => {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr
}

const generateAndSaveTokens = async (user) => {

    const userDto = new UserDto(user); // id, email, isActivated, username
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    
    return {...tokens, user: userDto}
}

class UserService {

    async registration(username, email, password) {

        const checkEmail = await UserModel.findOne({email})
        if (checkEmail) throw ApiError.BadRequest("This email is already registered")

        const checkUsername = await UserModel.findOne({username})
        if (checkUsername) throw ApiError.BadRequest("This username is already taken")

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await UserModel.create({username, email, password: hashPassword, activationLink})
        
        // i cant send mail without SMTP, but code is done and working, check .env file
        // await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const freshUserDataAndTokens = await generateAndSaveTokens(user)
        return freshUserDataAndTokens
    }

    async login(email, password) {

        const user = await UserModel.findOne({email})
        if (!user) throw ApiError.BadRequest("User with this email not found")

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) throw ApiError.BadRequest("Wrong password")

        const freshUserDataAndTokens = await generateAndSaveTokens(user)
        return freshUserDataAndTokens
    }

    async logout(refreshToken) {

        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async activate(activationLink) {

        const user = await UserModel.findOne({activationLink})
        if (!user) throw ApiError.BadRequest('Incorrect activation link')
        user.isActivated = true;
        await user.save();
    }

    async refresh(refreshToken) {

        if (!refreshToken) throw ApiError.UnauthorizedError();

        const userDataFromToken = tokenService.validateRefreshToken(refreshToken)
        const tokenInDb = await tokenService.findToken(refreshToken)
        if (!userDataFromToken || !tokenInDb) throw ApiError.UnauthorizedError();

        const user = await UserModel.findById(userDataFromToken.id);

        const freshUserDataAndTokens = await generateAndSaveTokens(user)
        return freshUserDataAndTokens
    }

    async getAllUsers() {

        const users = await UserModel.find()
        return users
    }

    async getUser(userId) {

        const {email, id, isActivated, likes, saves, username} = await UserModel.findById(userId)
        return {email, id, isActivated, likes, saves, username}
    }

    async getHistory (userId) {
      const user = await UserModel.findById(userId)
      const posts = await postModel.find().where('_id').in(user.history)
      return posts
    }

    async addToHistory(postId, userId) {
        const user = await UserModel.findById(userId)
        const index = user.history.indexOf(postId)
        if (index !== -1) user.history = arraymove(user.history, index, 0)
        else user.history.unshift(postId)
        await user.save()
    }

}

module.exports = new UserService();