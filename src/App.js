import React from 'react';
import HeaderComponent from './components/Header';
import ProductComponent from './components/Product';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CartComponent from './components/Cart';
import {Provider} from 'react-redux';
import store from './soter';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={ProductComponent} />
          <Route path="/cart" exact component={CartComponent} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
