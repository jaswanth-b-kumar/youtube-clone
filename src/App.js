import React, { useState } from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import LoginScreen from './screens/loginScreen/LoginScreen';
import HomeScreen from './screens/homeScreen/HomeScreen';
import './assets/css/_app.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app-container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app-main">
          {children}
        </Container>
      </div>
    </div>
  )
}

function App() {
  return <Router>
    <Routes>
      <Route path="/youtube-clone/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }>
      </Route>
      <Route path="/youtube-clone/auth"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }>
      </Route>
      <Route path="/youtube-clone/search"
        element={
          <Layout>
            <h1>Search Me!</h1>
          </Layout>
        }>
      </Route>
      <Route path="*" element={<Navigate to='/youtube-clone/' />}>
        
      </Route>
    </Routes>
  </Router>

}

export default App