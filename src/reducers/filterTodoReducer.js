import { FILTER_ALL, FILTER_PROCESS, FILTER_DONE } from "../actions/actionTypes";

const initialState = {
    category: {
        content: "allItems",
        color: ["red", "black", "black"]
    }
}

const filterTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_ALL:
            return {
                ...state,
                category: {
                    ...state.category,
                    content: "allItems",
                    color: ["red", "black", "black"]
                }
            }

        case FILTER_PROCESS:
            return {
                ...state,
                category: {
                    ...state.category,
                    content: "processItems",
                    color: ["black", "red", "black"]
                }
            }

        case FILTER_DONE:
            return {
                ...state,
                category: {
                    ...state.category,
                    content: "doneItems",
                    color: ["black", "black", "red"]
                }
            }

        default:
            return state
    }
}

export default filterTodoReducer;

