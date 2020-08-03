import React from 'react'
import {createStore} from 'redux'
import store from '../redux/store'

const initialState={
    test:1,
    content:'',
}

//function myActions(){
    export const ADD_TEST='ADD_TEST'
    export const REMOVE_TEST='REMOVE_TEST'

    export function addTodo(){
        return {type:ADD_TEST,content:'test'}
    }

    export function removeTodo(){
        return {type:REMOVE_TEST}
    }
//}

function reducers(state=initialState,action){
    console.log(state,action);
    switch(action.type){
        case ADD_TEST:{return{...state, content:action.content}}
        case REMOVE_TEST:{return{...state,}}
    }
} 
export function TestStore(){
    const storeTest = createStore(reducers);

    return storeTest
}