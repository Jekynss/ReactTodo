import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import createStore from './redux/store'
import {TestStore} from './containers/test.js'
import {Provider} from 'react-redux'

const store = createStore();
const testStore = TestStore();

testStore.dispatch({type:'ADD_TEST',content:'test1'});
testStore.dispatch({type:'ADD_TEST',content:'test2'});
testStore.dispatch({type:'ADD_TEST',content:'test3'});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
