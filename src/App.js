import React from 'react';
import './App.css';
import Header from './components/HeaderC/HeaderC';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import { Router, Switch, Route, NavLink, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';




const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route path='/profile' render={ () => <Profile /> } />
          <Route path='/users' render={ () => <Users /> } />
        </div>
      </div>
  );
}

export default App;
