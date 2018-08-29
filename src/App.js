import React from 'react';
import { Router } from '@reach/router';
import Gallery from './containers/Gallery';
import Canvas from './containers/Canvas';
import Info from './containers/Info';

const App = () => (
  <Router>
    <Gallery path="/" />
    <Canvas path="/canvas" />
    <Info path="/info" />
  </Router>
);

export default App;
