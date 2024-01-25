import { createAsyncThunk } from "@reduxjs/toolkit";

import userApi from "../../../services/user.service";

import {
  IAuthorizedUserResponse,
  SignInUserDto,
  SignUpUserDto,
  UserResponseDto,
} from "../../../types/user.types";

const signUpUser = createAsyncThunk<UserResponseDto, SignUpUserDto>(
  "sign-up",
  async (data) => {
    const user = await userApi.signUp(data);
    return user;
  }
);

const signInUser = createAsyncThunk<UserResponseDto, SignInUserDto>(
  "sign-in",
  async (data) => {
    const user = await userApi.signIn(data);
    return user;
  }
);

const getAuthenticatedUser = createAsyncThunk<IAuthorizedUserResponse, void>(
  "authed",
  async () => {
    const user = await userApi.getAuthenticatedUser();
    return user;
  }
);

export { signInUser, signUpUser, getAuthenticatedUser };
