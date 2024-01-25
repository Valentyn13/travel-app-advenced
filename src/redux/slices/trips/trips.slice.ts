import { createSlice } from "@reduxjs/toolkit"
import { ITripList } from "../../../types/trip.types"
import { getAllTrips } from "./actions"

type State ={
    trips: ITripList,
    loading:boolean,
    error:unknown|null
}

const initialState: State ={
    trips:[],
    loading:false,
    error:null
}

const {reducer, actions, name} = createSlice({
    initialState,
    name:'trips',
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getAllTrips.pending,(state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(getAllTrips.fulfilled,(state, action) => {
            state.trips = [...action.payload]
            state.loading = false
            state.error = null
        });
        builder.addCase(getAllTrips.rejected,(state,action) => {
            state.error = action.error
            state.loading = false
        })
    }
})


export {reducer, actions, name}