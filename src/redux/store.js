import { createStore, applyMiddleware } from "redux";

const initialState = {
    name : 'jaswanth',
    age: 21
}

const reducer = (initialState) => initialState

const store = createStore(reducer, initialState)

