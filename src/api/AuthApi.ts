import axios from "axios";

export interface ILogin {
  email: string;
  password: string;
}
export default class AuthApi {
  login(loginData: ILogin) {
    return true;
  }

  logout() {
    return false;
  }

  forgotPassword() {}

  resetPassword() {}
}
