import { INPUT_SEARCH } from "../actions/actionTypes"

const initialState = {
    searchText: ""
};

const searchReducer = (state = initialState, action) => {
    const newState = { ...state };

    if (action.type === INPUT_SEARCH) {
        newState.searchText = action.payload;
    }

    return newState;
};

export default searchReducer;