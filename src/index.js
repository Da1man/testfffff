import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, post: 'Hi, how are you?', likesCount: 0 },
    { id: 2, post: 'It\'s my first post', likesCount: 26 },
    { id: 2, post: 'bla bla', likesCount: 211 },
    { id: 2, post: 'ae ae', likesCount: 21 },
]

let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your IT' },
    { id: 3, message: 'YO!!' },
    { id: 4, message: 'YO' }
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
