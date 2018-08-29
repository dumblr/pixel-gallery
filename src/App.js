import React from 'react';
import { Router } from '@reach/router';
import Gallery from './containers/Gallery';
import Canvas from './containers/Canvas';

const App = () => (
  <Router>
    <Gallery path="/" />
    <Canvas path="/canvas" />
  </Router>
);

export default App;
