import { createStore } from 'redux';
import  reducer  from '../reducers/reducers'

export const store = createStore(reducer);