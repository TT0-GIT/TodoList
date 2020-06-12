import { INPUT_SEARCH,INPUT_TODO,ADD_TODO,DEL_TODO,EDIT_TODO,UPDATE_TODO,SAVE_EDIT,CANCEL_EDIT,
         MARK_DONE,INPUT_ORDER,SORT_TODO,FILTER_ALL,FILTER_PROCESS,FILTER_DONE } from "./actionTypes"

export const inputSearch = (value) => {
    return {
        type: INPUT_SEARCH,
        payload: value
    }
}

export const inputTodo = value => {
    return {
        type: INPUT_TODO,
        payload: value
    }
}

export const addTodo = () => {
    return{
        type: ADD_TODO
    }
}

export const delTodo = (key) => {
    return {
        type: DEL_TODO,
        key
    }
}

export const editTodo = key => {
    return {
        type: EDIT_TODO,
        key
    }
}

export const updateTodo = (value,key) => {
    return {
        type: UPDATE_TODO,
        key,
        payload:value
    }
}


export const saveEdit = key => {
    return {
        type: SAVE_EDIT,
        key
    }
}

export const cancelEdit = key => {
    return {
        type: CANCEL_EDIT,
        key
    }
}

export const markDone = key => {
    return {
        type: MARK_DONE,
        key
    }
}

export const inputOrder = (value,key) => {
    return {
        type: INPUT_ORDER,
        key,
        payload:value
    }
}

export const sortTodo = key => {
    return {
        type: SORT_TODO,
        key
    }
}

export const filterAll = () => {
    return {
        type:FILTER_ALL
    }
}

export const filterProcess = () => {
    return {
        type:FILTER_PROCESS
    }
}

export const filterDone = () => {
    return {
        type:FILTER_DONE
    }
}
