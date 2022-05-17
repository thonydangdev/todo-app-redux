// const initState = [
//     { id: 1, name: "Learn Yoga", completed: false, priority: "Low" },
//     { id: 2, name: "Learn React", completed: true, priority: "High" },
//     { id: 3, name: "Learn Redux", completed: false, priority: "Medium" },
// ];
// const todoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [...state, action.payload];
//         case "todoList/toggleTodo":
//             return state.map((todo) =>
//                 todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//             );
//         default:
//             return state;
//     }
// };
// export default todoListReducer;
import { createSlice } from "@reduxjs/toolkit";
const todoListReducer = createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "Learn Yoga", completed: false, priority: "Low" },
        { id: 2, name: "Learn React", completed: true, priority: "High" },
        { id: 3, name: "Learn Redux", completed: false, priority: "Medium" },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const currentTodo = state.find((todo) => todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
        },
    },
});
export default todoListReducer;
