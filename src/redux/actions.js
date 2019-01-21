import {
    ADD,
    GET_TODOS
} from './action-types';

export const addTodo = (str) => ({
    type: ADD,
    data: str
})

// async
export const addAsyncTodo = (str) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addTodo(str));
        }, 1000);
    }
}

// get todos
const set_todos = (todos) => ({
    type: GET_TODOS,
    data: todos
})

export const get_todos = (str) => {
    return dispatch => {
        setTimeout(() => {
            const todos = ['yoyo', 'hehe', 'lala'];
            dispatch(set_todos(todos));
        }, 1000)
    }
}