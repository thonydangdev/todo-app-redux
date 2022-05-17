// import { legacy_createStore as createStore } from "redux";

// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./../components/Filters/filtersSlice.js";
import todoListReducer from "./../components/TodoList/todoListSlice.js";

const store = configureStore({
    reducer: {
        filter: filtersReducer.reducer,
        todoList: todoListReducer.reducer,
    },
});
export default store;
