import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FormComponent from './component/FormComponent';
import Details from './component/Details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />

        <Route path="/form" element={<FormComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
