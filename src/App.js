import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import Home from './scenes/Home'
import CoinPage from './scenes/CoinPage'
import configureStore from './store'

const store = process.env.NODE_ENV === 'development' ?
  configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) :
  configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="grid-container">
            <Route exact path="/" component={Home} />
            <Route path="/:id/:symbol" component={CoinPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
