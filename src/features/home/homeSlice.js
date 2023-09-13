import { createSlice } from "@reduxjs/toolkit"

const initialState={
    showSideBar:false
}

const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers:{
        hideSideBar : (state) => {
            state.showSideBar = false
        },
        toggleSideBar : (state) => {
            state.showSideBar = !state.showSideBar
        }

    }

})

export default homeSlice.reducer

export const {hideSideBar,toggleSideBar} = homeSlice.actions
