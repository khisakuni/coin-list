import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './scenes/Home'
import configureStore from './store'

const store = process.env.NODE_ENV === 'development' ?
  configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) :
  configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
