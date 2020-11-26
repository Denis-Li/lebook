import React from 'react';
import './App.css';
import Header from './components/HeaderC/HeaderC';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';

import { Router, Switch, Route, NavLink, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';




const App = (props) => {
  
  

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route exact path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} /> */}


          <Route exact path='/dialogs' render={ () => <Dialogs messages={props.appState.messages} dialogs={props.appState.dialogs} /> } />
          <Route path='/profile' render={ () => <Profile posts={props.appState.posts} /> } />
          <Route path='/news' render={ () => <News /> } />


        </div>
        
      </div>

    </BrowserRouter>
  );
}

export default App;
