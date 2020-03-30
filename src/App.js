
import React from 'react';

import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import A from './A';

import B from './B';

function App() {
  return (

    <Router>
      <div>header</div>
        <div>center:
            <div>
                <Switch>
                    <Route path="/a" component={A}/>
                    <Route path="/b" component={B}/>
                    <Route path="/article/:slug" component={B}/>
                    <Router>
                        error 404
                    </Router>
                </Switch>
            </div>
        </div>
        <div>footer</div>
    </Router>
  );
}

export default App;
