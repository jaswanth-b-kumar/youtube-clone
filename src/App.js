import React from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <Sidebar />
      </div>
    </div>
  )
}

export default App