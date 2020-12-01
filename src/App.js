import React from 'react';
import './App.css';
import Header from './components/HeaderC/HeaderC';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';

import { Router, Switch, Route, NavLink, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import { addPost } from './redux/state';




const App = (props) => {
  
  

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route exact path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} /> */}


          <Route exact path='/dialogs' render={ () => <Dialogs 
          dialogsPage={props.state.dialogsPage} /> } />
          <Route path='/profile' render={ () => <Profile 
            profilePage={props.state.profilePage} 
            dispatch={props.dispatch} /> } />
          <Route path='/news' render={ () => <News /> } />
        </div>
      </div>
  );
}

export default App;
