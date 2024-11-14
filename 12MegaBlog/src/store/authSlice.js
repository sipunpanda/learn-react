import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null
}
//auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) =>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout:(state) =>{
            state.status = false;
            state.userData = null;
        }

    }
})

//create post Slice like state.all post, state.userpost

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;