import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../../types/user.types"
import { getAuthenticatedUser, signInUser, signUpUser } from "./actions"

type State ={
    user: IUser | null
    loading:boolean,
    error:unknown | null   
}

const initialState: State ={
    user: null,
    loading:false,
    error: null
}

const {reducer, name, actions:{signOut}} = createSlice({
    initialState,
    name:'user',
    reducers:{
        signOut: (state) => {
            state.user = null
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(signInUser.fulfilled,(state, action) => {
            const {token, user} = action.payload

            localStorage.setItem('token', token)

            state.user = user
            state.loading = false
            state.error = null

        });
        builder.addCase(signInUser.pending,(state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(signInUser.rejected,(state, action) => {
            state.loading = false
            state.error = action.error
            console.error(action.error)
        });

        builder.addCase(signUpUser.fulfilled,(state, action) => {
            const {token, user} = action.payload
            localStorage.setItem('token', token)
            state.user = user
        });
        builder.addCase(signUpUser.pending,(state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(signUpUser.rejected,(state, action) => {
            state.loading = false
            state.error = action.error
            console.error(action.error)
        });
        builder.addCase(getAuthenticatedUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false
            state.error = null
        })
        builder.addCase(getAuthenticatedUser.pending,(state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(getAuthenticatedUser.rejected,(state,action) => {
            localStorage.removeItem('token')
            state.error = action.error
            state.user = null
            state.loading = false
            console.error(action.error)
        })
    }
})
export {reducer, name, signOut}