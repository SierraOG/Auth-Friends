import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register'
import UserMap from './components/UserMap';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/register">Register New Friends</Link>
          </button>
          <button>
            <Link to="/protected">Friends List</Link>
          </button>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/register" component={Register} />
        <PrivateRoute exact path="/protected" component={UserMap} />
        {/* <PrivateRoute path="/anotherRoute" component={SomeOtherComponent} /> */}
      </div>
    </Router>
  );
}

export default App;

