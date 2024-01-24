import { createSlice } from "@reduxjs/toolkit"
import { IBookingList } from "../../../types/booking.types"

type State ={
    bookings:IBookingList
}

const initialState: State ={
    bookings:[]
}

const {reducer, actions, name} = createSlice({
    initialState,
    name:'bookings',
    reducers:{},
    extraReducers() {}
})


export {actions, reducer, name}