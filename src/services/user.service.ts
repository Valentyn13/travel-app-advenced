import { SignUpUserDto, SignInUserDto, UserResponseDto, IAuthorizedUserResponse } from "../types/user.types"
import httpApi from "./http.service"

const BASE_URL = 'https://travel-app-api.up.railway.app/api/v1'


class UserApi {
    #signUpPath = '/auth/sign-up'
    #signInPath ='/auth/sign-in'
    #authorizedUser = '/auth/authenticated-user'

    async getAuthenticatedUser ():Promise<IAuthorizedUserResponse> {
        return httpApi.load(`${BASE_URL}${this.#authorizedUser}`,{
            method:'GET',
            payload: null,
            hasAuth:true,
            contentType:'application/json'
        })
    }

    async signUp (user:SignUpUserDto):Promise<UserResponseDto> {
        return httpApi.load(`${BASE_URL}${this.#signUpPath}`,{
            method:'POST',
            hasAuth:false,
            payload:JSON.stringify(user),
            contentType:'application/json'
        })
    }

    async signIn (user: SignInUserDto):Promise<UserResponseDto> {
        return httpApi.load(`${BASE_URL}${this.#signInPath}`,{
            method:'POST',
            hasAuth:false,
            payload:JSON.stringify(user),
            contentType:'application/json'
        })
    }
}

const userApi = new UserApi()
export default userApi;