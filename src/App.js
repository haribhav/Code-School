import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DashboardPage from './components/DashboardPage'; // Import your DashboardPage component
import Register from './components/Register'; // Import your Register component
import Login from './components/Login'; // Import your Login component
import CoursePage from './components/CoursePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/course" component={CoursePage} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
