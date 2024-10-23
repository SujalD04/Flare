import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/sign-in" />} /> 
        <Route path="/Homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
