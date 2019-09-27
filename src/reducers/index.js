import { combineReducers } from "redux";

import Toys from './reducer_books';
import ActiveBookReducer from './reducer_active_book';
const rootReducer = combineReducers({
    // our first state in Redux store - books
    books: Toys,
    activeBook: ActiveBookReducer
});
export default rootReducer;