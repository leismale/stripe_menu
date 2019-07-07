import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from './views/Nav'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
