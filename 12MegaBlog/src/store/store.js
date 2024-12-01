import {configureStore} from '@reduxjs/toolkit'

import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        auth:authSlice,
        // More Slice
        // post: postSlice
    }
})

export default store;
