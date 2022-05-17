import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/filtersSlice.js";
import todoListReducer from "../components/TodoList/todoListSlice.js";

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filtersReducer(state.filter, action),
//         todoList: todoListReducer(state.todoList, action),
//     };
// };

const rootReducer = combineReducers({
    filter: filtersReducer,
    todoList: todoListReducer,
});
export default rootReducer;
