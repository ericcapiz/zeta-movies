import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import {GlobalStyle} from './GlobalStyle';


const App = () => (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:movieId" element={<Movie />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );


export default App;
