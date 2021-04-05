import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import { useState } from 'react';
import MyTimezones from './Pages/MyTimezones';

function App() {
  const [timezones, setTimezones] = useState([]);

  return (
    <Router>
      <div className="App">
        <h1>World Clock</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timezones">My Timezones</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Home setTimezones={setTimezones} timezones={timezones} />
            </Route>
            <Route path="/timezones" exact>
              <MyTimezones setTimezones={setTimezones} timezones={timezones} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;