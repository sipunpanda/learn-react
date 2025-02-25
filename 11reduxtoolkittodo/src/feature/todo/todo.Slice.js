import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World!"
    }]
}

function sayHello(state, action) {
    const todo = {
        id: nanoid(),
        text: action.payload
    }
    state.todos.push(todo);
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: sayHello,
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload.id) 
         },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer