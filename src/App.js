import React, { useEffect, useState } from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import LoginScreen from './screens/loginScreen/LoginScreen';
import HomeScreen from './screens/homeScreen/HomeScreen';
import './assets/css/_app.scss';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value => !value)


  const {accessToken, loading} = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!accessToken && !loading){
      navigate('/youtube-clone/auth')
    }
  })

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
  return <Routes>
      <Route path="/youtube-clone/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }>
      </Route>
      <Route path="/youtube-clone/auth"
        element={
            <LoginScreen />
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

}

export default App