import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordGenerator from './components/PasswordGenerator';
import ChmodCalculator from './components/ChmodCalculator';
import Header from "./components/Header"
import CrontabGenerator from './components/CrontabGenerator';
import UnixStampConverter from './components/UnixStampConverter';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route exact path="/" element={<PasswordGenerator />} />
        <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
        <Route path="/ChmodCalculator" element={<ChmodCalculator />} />
        <Route path="/CrontabGenerator" element={<CrontabGenerator />} />
        <Route path="/UnixStampConverter" element={<UnixStampConverter />} />
      </Routes>
    </Router>
  );
}

export default App;
