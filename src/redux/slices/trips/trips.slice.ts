import { createSlice } from "@reduxjs/toolkit"
import { ITripList } from "../../../types/trip.types"

type State ={
    trips: ITripList
}

const initialState: State ={
    trips:[]
}

const {reducer, actions, name} = createSlice({
    initialState,
    name:'trips',
    reducers:{},
    extraReducers(){}
})


export {reducer, actions, name}