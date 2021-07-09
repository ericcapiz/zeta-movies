import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {GlobalStyle} from './GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
