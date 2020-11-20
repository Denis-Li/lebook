import React from 'react';
import './App.css';
import Header from './components/HeaderC/HeaderC';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';

import { Router, Switch, Route, NavLink, BrowserRouter } from 'react-router-dom';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
        </div>
        
      </div>

    </BrowserRouter>
  );
}

export default App;
