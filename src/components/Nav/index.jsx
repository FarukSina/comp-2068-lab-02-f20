import React from 'react';

// You're likely missing some imports...
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';

import Styles from './styles';

// Don't forget to import your components
import Home from "../Home/index"
import About from "../About/index"

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            {/* Your link to home here */}
            <Link to="/home">Home</Link>
          </li>
          <li>
            {/* Your link to about here */}
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Styles.Nav>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        {/* Your Routes Here */}
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;