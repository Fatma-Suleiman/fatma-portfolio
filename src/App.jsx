import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from '/src/Pages/HomePage';
import AboutPage from '/src/Pages/AboutPage';
import ProjectPage from '/src/Pages/ProjectPage';
import ContactPage from '/src/Pages/ContactPage';
import Cursor from '/src/components/Cursor';

import './App.css'
import './App.css'

 function App() {
  return (
      <div className="relative">
      {/* Custom cursor */}
      <Cursor />
<Routes>
  <Route index  element={<HomePage/>} />
  <Route path='about'  element={<AboutPage/>} />
   <Route path='project'  element={<ProjectPage/>} />
   <Route path='contact'  element={<ContactPage/>} />
</Routes>
</div>
  );
};

export default App;

