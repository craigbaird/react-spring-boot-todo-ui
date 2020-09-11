const authenticatedUserKey = 'authenticatedUser';

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(authenticatedUserKey, username);
    }

    logout() {
        sessionStorage.removeItem(authenticatedUserKey);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(authenticatedUserKey);
        if (user === null) {
            return false;
        }
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(authenticatedUserKey);
        if (user === null) {
            return false;
        }
        return user;
    }
}

export default new AuthenticationService()