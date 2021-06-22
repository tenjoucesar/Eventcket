import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import evencketTheme from 'themes/evencket-themes';
import Landing from 'containers/Landing';
import Login from 'containers/Login';
import EventContent from 'containers/EventContent';
import CreateEvent from 'containers/CreateEvent';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { DeviceProvider } from 'providers/Device';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleOnClick = () => {
    if (isMenuOpen) setMenuOpen(false);
  }

  return (
    <DeviceProvider>
      <ThemeProvider theme={evencketTheme}>
        <Router>
          <div onClick={() => handleOnClick()}>
            <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
            <Switch>
              <Route path='/events/:id' component={EventContent} />
              <Route path='/create-event' component={CreateEvent} />
              <Route path='/login' component={Login} />
              <Route path='/' component={Landing} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </DeviceProvider>
  );
}

export default App;
