import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './assets/pages/Blog';
import Home from './assets/pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  );
};

export default App;
