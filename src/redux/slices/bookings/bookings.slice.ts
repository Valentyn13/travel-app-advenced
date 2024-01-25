import { createSlice } from "@reduxjs/toolkit"
import { IBookingList } from "../../../types/booking.types"
import { cancelBooking, createBooking, getUserBookings } from "./actions"

type State ={
    bookings:IBookingList,
    loading: boolean;
    error: null| unknown
}

const initialState: State ={
    bookings:[],
    loading:false,
    error: null
}

const {reducer, actions, name} = createSlice({
    initialState,
    name:'bookings',
    reducers:{},
    extraReducers:(builder) => {
        // get bookings
        builder.addCase(getUserBookings.pending,(state) =>{
            state.error = null
            state.loading = true
        });
        builder.addCase(getUserBookings.fulfilled,(state,action) => {
            state.bookings = [...action.payload]
            state.error = null
            state.loading = false
        })
        builder.addCase(getUserBookings.rejected,(state,action) =>{
            state.error = action.error
            state.loading = false
        })
        // creat booking
        builder.addCase(createBooking.pending,(state) =>{
            state.error = null
            state.loading = true
        })
        builder.addCase(createBooking.fulfilled,(state,action) =>{
            state.bookings.push(action.payload)
            state.error = null
            state.loading = false
        })
        builder.addCase(createBooking.rejected,(state,action) => {
            state.loading = false
            state.error = action.error
        })
        // cancel booking
        builder.addCase(cancelBooking.pending,(state) => {
            state.error = null
            state.loading = true
        })
        builder.addCase(cancelBooking.fulfilled,(state,action) =>{
            const {isDeleted, bookingId} = action.payload
            if(isDeleted){
                state.bookings = state.bookings.filter(booking => booking.id !== bookingId)
            }
            state.loading = false
            state.error = null
        })
        builder.addCase(cancelBooking.rejected,(state,action) =>{
            state.error = action.error
            state.loading = false
        })
    }
})


export {actions, reducer, name}