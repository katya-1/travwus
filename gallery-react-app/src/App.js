import logo from "./logo.svg";
import "./App.css";
import React from "react";
import WeeklyScheduler from "./components/WeeklyScheduler";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import moment from "moment";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/timetable">Day scheduler</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="App">
          <section>
            <Switch>
              <Route path="/timetable/:id">
                <CurrentEventsProgress />
              </Route>
              <Route path="/timetable">
                <Redirect to={`/timetable/${moment().format("YYYY-MM-DD")}`} />
              </Route>

              <Route path="/highlights">
                <WeeklyScheduler />
              </Route>

              <Route path="/">
                <h1>Exhibition of paint</h1>
                <p>
                  {" "}
                  Welcome to our service that provides a schedule of painting exhiditions. Please explore{" "}
                  <Link to="/highlights">highlights</Link> per week, or{" "}
                  <Link to="/timetable">today scheduler</Link>
                </p>
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
