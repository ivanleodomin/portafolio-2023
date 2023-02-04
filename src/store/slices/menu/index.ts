import { createSlice } from "@reduxjs/toolkit"


const menuSlice = createSlice({
    name: "menu",
    initialState: {
        show: false,
    },
    reducers: {
        setMenu: (state, action) => {
            state.show = action.payload
        }
    }
})

export default menuSlice.reducer
export const {setMenu} =  menuSlice.actions