import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('todo')) || [];

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return [
                ...state,
                {
                    ...action.payload.newTodo,
                    id: new Date().getTime(),
                    start_date: new Date().toISOString(),
                },
            ];
        },
        updateTodo: (state, action) => {
            return state.map((todo) => {
                return todo.id === action.payload.searchParamsId
                    ? { ...action.payload.newTodo, start_date: new Date().toISOString(), end_date: '', isDone: false }
                    : todo;
            });
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        toggleTodo: (state, action) => {
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, isDone: !todo.isDone, end_date: todo.isDone ? '' : new Date().toISOString() }
                    : todo
            );
        },
    },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
