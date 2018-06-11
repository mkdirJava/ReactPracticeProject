// the imports are from webpack,
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider}  from 'react-redux';
import{loadCourses} from './actions/courseActions';
import{loadAuthors} from './actions/authorActions';



// pass initial state from server or local storage
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  // the Provider takes in a store and also takes in the application so the application has full scope of the store.
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,document.getElementById('app')

);
