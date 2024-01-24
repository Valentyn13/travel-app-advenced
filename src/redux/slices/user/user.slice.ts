import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../../types/user.types"

type State ={
    user: IUser | null
}

const initialState: State ={
    user: null
}


const {reducer, actions, name} = createSlice({
    initialState,
    name:'user',
    reducers:{
        testAction: (state, action:PayloadAction<string>) => {
            console.log(action.payload)
        },
    },
    extraReducers(){}
})

export const {testAction} = actions
export {reducer, name}