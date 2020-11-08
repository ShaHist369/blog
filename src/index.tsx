import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import articlesReducer from './redux/redusers/articlesReducer'
import commentsReducer from './redux/redusers/commentsReducer'
import tabsReducer from './redux/redusers/tabsReducer'
import {combineReducers} from "redux";
import firebase from 'firebase'
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import auth from './redux/redusers/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCaCCkK4Ie9dO7iHmxIsKv1p_9UGrhtOyk",
    authDomain: "let-blog-script.firebaseapp.com",
    databaseURL: "https://let-blog-script.firebaseio.com",
    projectId: "let-blog-script",
    storageBucket: "let-blog-script.appspot.com",
    messagingSenderId: "211972208770",
    appId: "1:211972208770:web:2b4fd3706d291501fb1c9b"
};

firebase.initializeApp(firebaseConfig)


const rootReducer = combineReducers({
    articles: articlesReducer,
    comments: commentsReducer,
    tabs: tabsReducer,
    auth: auth,
    form: formReducer
})


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
