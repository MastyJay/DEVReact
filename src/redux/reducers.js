import {
  ADD,
  GET_TODOS
} from "./action-types";

const defaultState = ["please waiting..."];
export function todos(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return [action.data, ...state];
    case GET_TODOS:
      return action.data;
    default:
      return state;
  }
};