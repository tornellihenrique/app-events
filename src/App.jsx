import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/index';

// PAGES
import Navbar from './components/navbar';
import Login from './view/login';
import Signin from './view/signin';
import Recovery from './view/recovery';
import Home from './view/home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/recovery' component={Recovery} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
