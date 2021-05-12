import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/HeaderC/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'
import { withSuspense } from './hoc/withSuspense';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
    
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />

    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' 
              render={() => <Redirect to={"/profile"}/>} />

            <Route exact path='/dialogs' 
              render={withSuspense(DialogsContainer)} />
            <Route path='/profile/:userId?' 
              render={withSuspense(ProfileContainer)} />
            <Route path='/users' render={ () => <UsersContainer /> } />
            <Route path='/login' render={ () => <LoginPage /> } />
            <Route path='*' render={ () => <div>404 not found</div> } />
          </Switch>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter, 
  connect (mapStateToProps, {initializeApp})) (App);

const SamurajJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamurajJSApp;
