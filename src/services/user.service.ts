import httpApi from "./http.service";
import { BASE_URL } from "./constants/constants";

import {
  SignUpUserDto,
  SignInUserDto,
  UserResponseDto,
  IAuthorizedUserResponse,
} from "../types/user.types";

class UserApi {
  #signUpPath = "/auth/sign-up";
  #signInPath = "/auth/sign-in";
  #authorizedUser = "/auth/authenticated-user";

  async getAuthenticatedUser(): Promise<IAuthorizedUserResponse> {
    return httpApi.load(`${BASE_URL}${this.#authorizedUser}`, {
      method: "GET",
      payload: null,
      hasAuth: true,
      contentType: "application/json",
    });
  }

  async signUp(user: SignUpUserDto): Promise<UserResponseDto> {
    return httpApi.load(`${BASE_URL}${this.#signUpPath}`, {
      method: "POST",
      hasAuth: false,
      payload: JSON.stringify(user),
      contentType: "application/json",
    });
  }

  async signIn(user: SignInUserDto): Promise<UserResponseDto> {
    return httpApi.load(`${BASE_URL}${this.#signInPath}`, {
      method: "POST",
      hasAuth: false,
      payload: JSON.stringify(user),
      contentType: "application/json",
    });
  }
}

const userApi = new UserApi();
export default userApi;
