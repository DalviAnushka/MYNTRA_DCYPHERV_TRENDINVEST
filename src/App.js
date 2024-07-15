import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDash from './components/MainDash/MainDash';
import TrendInvest from './pages/TrendInvest/TrendInvest';
import Sidebar from './components/Sidebar';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<MainDash />} />
              <Route path="/TrendInvest" element={<TrendInvest />} />
            </Routes>
          </main>
          <RightSide />
        </div>
      </div>
    </Router>
  );
}

export default App;
