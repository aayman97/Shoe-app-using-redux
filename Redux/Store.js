import { createStore } from 'redux'
import { CartReducer } from './Reducers/CartReducer'

export const store = createStore(CartReducer)