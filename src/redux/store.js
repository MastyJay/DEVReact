import {
    createStore,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk';

import {
    todos
} from "./reducers";

export default createStore(todos, applyMiddleware(thunk));