import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from 'containers/Landing';
import Login from 'containers/Login';
import EventPage from 'containers/EventPage';
import CreateEvent from 'containers/CreateEvent';
import Navbar from 'components/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/events/:id" component={EventPage} />
          <Route path="/create-event" component={CreateEvent} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
  );
}

export default App;
