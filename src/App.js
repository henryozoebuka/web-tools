import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordGenerator from './components/PasswordGenerator';
import ChmodCalculator from './components/ChmodCalculator';
import Header from "./components/Header"
import CrontabGenerator from './components/CrontabGenerator';
import UnixStampConverter from './components/UnixStampConverter';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<ChmodCalculator />} />
        <Route path="/ChmodCalculator" element={<ChmodCalculator />} />
        <Route path="/CrontabGenerator" element={<CrontabGenerator />} />
        <Route path="/UnixStampConverter" element={<UnixStampConverter />} />
        <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
