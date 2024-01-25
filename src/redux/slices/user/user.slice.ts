import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { getAuthenticatedUser, signInUser, signUpUser } from "./actions";

import { IUser } from "../../../types/user.types";

type State = {
  user: IUser | null;
  loading: boolean;
  error: unknown | null;
};

const initialState: State = {
  user: null,
  loading: false,
  error: null,
};

const {
  reducer,
  name,
  actions: { signOut },
} = createSlice({
  initialState,
  name: "user",
  reducers: {
    signOut: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthenticatedUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addMatcher(
      isAnyOf(signInUser.fulfilled, signUpUser.fulfilled),
      (state, action) => {
        const { token, user } = action.payload;
        localStorage.setItem("token", token);
        state.user = user;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addMatcher(
      isAnyOf(
        getAuthenticatedUser.pending,
        signInUser.pending,
        signUpUser.pending
      ),
      (state) => {
        state.loading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      isAnyOf(
        getAuthenticatedUser.rejected,
        signInUser.rejected,
        signUpUser.rejected
      ),
      (state, action) => {
        localStorage.removeItem("token");
        state.error = action.error;
        state.user = null;
        state.loading = false;
        console.error(action.error);
      }
    );
  },
});
export { reducer, name, signOut };
