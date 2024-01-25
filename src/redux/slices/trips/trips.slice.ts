import { createSlice } from "@reduxjs/toolkit"
import { ITrip, ITripList } from "../../../types/trip.types"
import { getAllTrips, getTripDetails } from "./actions"

type State ={
    trips: ITripList,
    current: ITrip | null
    loading:boolean,
    error:unknown|null
}

const initialState: State ={
    trips:[], 
    current:null,
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
        builder.addCase(getTripDetails.pending,(state) => {
            state.error = null
            state.loading = true
        })
        builder.addCase(getTripDetails.fulfilled,(state, action) => {
            state.current = action.payload
            state.error = null
            state.loading = false
        })
        builder.addCase(getTripDetails.rejected, (state, action) => {
            state.error = action.error
            state.loading = false
        })
    }
})


export {reducer, actions, name}