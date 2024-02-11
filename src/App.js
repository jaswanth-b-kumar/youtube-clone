import React, { useState } from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/homeScreen/HomeScreen';
import './assets/css/_app.scss'

function App() {

  const [sidebar,toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar( value => !value)

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app-container border border-info">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app-main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </div>
  )
}

export default App