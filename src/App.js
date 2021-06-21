import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import evencketTheme from 'themes/evencket-themes';
import Landing from 'containers/Landing';
import Login from 'containers/Login';
import EventPage from 'containers/EventPage';
import CreateEvent from 'containers/CreateEvent';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { DeviceProvider } from 'providers/Device';

function App() {
  return (
    <DeviceProvider>
      <ThemeProvider theme={evencketTheme}>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/events/:id' component={EventPage} />
            <Route path='/create-event' component={CreateEvent} />
            <Route path='/login' component={Login} />
            <Route path='/' component={Landing} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </DeviceProvider>
  );
}

export default App;
