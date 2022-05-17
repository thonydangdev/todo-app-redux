import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;
export const statusTextSelector = (state) => state.filter.status;
export const prioritiesSelector = (state) => state.filter.priorities;
export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusTextSelector,
    prioritiesSelector,
    (todoList, searchText, statusText, priorities) => {
        return todoList.filter((todo) => {
            if (statusText === "All") {
                if (priorities.length) {
                    return todo.name.includes(searchText) && priorities.includes(todo.priority);
                } else {
                    return todo.name.includes(searchText);
                }
            } else {
                if (priorities.length) {
                    return (
                        todo.name.includes(searchText) &&
                        (statusText === "Completed" ? todo.completed : !todo.completed) &&
                        priorities.includes(todo.priority)
                    );
                } else {
                    return (
                        todo.name.includes(searchText) &&
                        (statusText === "Completed" ? todo.completed : !todo.completed)
                    );
                }
            }
        });
    }
);
