import React from 'react';
import { connect } from 'react-redux';
import HeaderC from './HeaderC';
import {getAuthUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <HeaderC {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);