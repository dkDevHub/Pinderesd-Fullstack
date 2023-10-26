import $api from "../http";

export default class AuthService {
    static async registration(email, password, username) {
        return $api.post('/user/registration', {email, password, username})
    }

    static async login(email, password) {
        return $api.post('/user/login', {email, password})
    }

    static async logout() {
        return $api.post('/user/logout')
    }

    static async refresh() {
        return $api.get('user/refresh', {withCredentials: true})
    }

}