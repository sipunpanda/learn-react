import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feature/todo/todo.Slice'


export const store = configureStore({
    reducer: todoReducer
})