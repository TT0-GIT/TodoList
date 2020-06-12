import { INPUT_TODO, ADD_TODO, DEL_TODO, EDIT_TODO, UPDATE_TODO, SAVE_EDIT, CANCEL_EDIT, MARK_DONE, INPUT_ORDER, SORT_TODO } from "../actions/actionTypes"

const initialState = {
    item: {
        order: 1,
        text: "",
        isEdit: false,
        isDone: false,
        newText: "",
        key: ""
    },
    allItems: [],
    error:""
};

const handleTodoReducer = (state = initialState, action) => {

    switch (action.type) {
        case INPUT_TODO:
            return {
                ...state,
                item: {
                    ...state.item,
                    order: 1,
                    text: action.payload,
                    isEdit: false,
                    isDone: false,
                    newText: "",
                    key: Date.now()
                }
            };

        case ADD_TODO:
            if (state.item.text.length !== 0 && 
                state.allItems.find(item => item.text === state.item.text) === undefined) {
                return {
                    ...state,
                    allItems: [...state.allItems, state.item],
                    item: {
                        ...state.item,
                        order: 1,
                        text: "",
                        isEdit: false,
                        isDone: false,
                        newText: "",
                        key: Date.now()
                    },
                    error:""
                }
            } else {
                return {
                    ...state,
                    error:"ERROR: Your input is empty or you have added this item, please re-enter!"
                }
            };

        case DEL_TODO:
            return {
                ...state,
                allItems: [...state.allItems].filter(item => item.key !== action.key)
            }

        case EDIT_TODO:
            return {
                ...state,
                allItems: [...state.allItems].map(item => {
                    if (item.key === action.key) {
                        item.isEdit = true;
                    }
                    return item;
                })
            }

        case UPDATE_TODO:
            return {
                ...state,
                allItems: [...state.allItems].map(item => {
                    if (item.key === action.key) {
                        item.newText = action.payload;
                    }
                    return item;
                })
            }

        case SAVE_EDIT:
            return {
                ...state,
                allItems: [...state.allItems].map(item => {
                    if (item.key === action.key && item.newText.length !== 0) {
                        item.text = item.newText;
                        item.newText = "";
                        item.isEdit = false;
                    }
                    return item;
                })
            }

        case CANCEL_EDIT:
            return {
                ...state,
                allItems: [...state.allItems].map(item => {
                    if (item.key === action.key) {
                        item.isEdit = false;
                    }
                    return item;
                })
            }

        case MARK_DONE:
            return {
                ...state,
                allItems: [...state.allItems].map(item => {
                    if (item.key === action.key) {
                        item.isDone = !item.isDone;
                    }
                    return item;
                })
            }


        case INPUT_ORDER:
            return {
                ...state,
                allItems: [...state.allItems].map(item => {
                    if (item.key === action.key) {
                        item.order = +action.payload;
                    }
                    return item;
                })
            }

        case SORT_TODO:
            return {
                ...state,
                allItems: [...state.allItems].sort(function (a, b) {
                    return a.order - b.order;
                })
            }

        default:
            return state;
    }
}

export default handleTodoReducer;
