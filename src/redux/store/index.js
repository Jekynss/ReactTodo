import {createStore} from 'redux'
import reducers from '../reducers'

export default function(){
    const store = createStore(reducers)
    return store;
}