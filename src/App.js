import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Wedding from './Pages/Wedding';
import Photos from './Pages/Photos';
import Registries from './Pages/Registries';
import Rsvp from './Pages/Rsvp';

const App = function() {
  return (
    <Router>
      <Route exact path="/" component={Wedding}/>
      <Route exact path="/photos" component={Photos}/>
      <Route exact path="/registries" component={Registries}/>
      <Route exact path="/rsvp" component={Rsvp}/>
    </Router>
  )
}

export default App;
