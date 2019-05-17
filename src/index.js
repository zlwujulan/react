import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store/index'
import router from './router/index'
const App = <h1>Redux Shopping Cart</h1>;
// ReactDOM.render(<App />, document.getElementById('root'));
render(
  <Provider store={store}>
  { router }
</Provider> ,
      document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
