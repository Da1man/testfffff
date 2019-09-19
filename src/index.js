import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './Redux/store'
import {BrowserRouter } from 'react-router-dom';


let rerenderEntryTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>, document.getElementById('root'));
}


rerenderEntryTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntryTree(state);

});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
