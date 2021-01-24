import React from 'react';
import { connect } from 'react-redux';
import HeaderC from './HeaderC';
import {logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    
    render() {
        return <HeaderC {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {logout}) (HeaderContainer);