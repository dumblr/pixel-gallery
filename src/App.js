import React from 'react';
import { Router } from '@reach/router';
import Gallery from './containers/Gallery';
import Canvas from './containers/Canvas';
import Info from './containers/Info';
import Instructions from './containers/Instructions';

const App = () => (
  <Router>
    <Gallery path="/" />
    <Canvas path="/canvas" />
    <Info path="/info" />
    <Instructions path="/using-pixel-gallery" />
  </Router>
);

export default App;
