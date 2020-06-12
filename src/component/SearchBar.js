import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from "react-redux";
import { inputSearch } from '../actions';

const SearchBar = () => {
    const searchText = useSelector(state => state.searchReducer.searchText);
    const allItems = useSelector(state => state.handleTodoReducer.allItems);
    const dispatch = useDispatch();
    let searchBar;
    if (allItems.length !== 0) {
        searchBar = <input className="search-bar"
            placeholder='Search the to do list'
            value={searchText}
            onChange={(e) => dispatch(inputSearch(e.target.value))}
        />
    } else {
        searchBar = <h1>No Todos Here...</h1>;
    }

    return (
        <div>
            {searchBar}
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         searchText: state.searchText
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         handleSearchTextChange: (e)=> {
//             dispatch(SearchTextChange(e.target.value))
//         }
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//     )(SearchBar);

export default SearchBar;