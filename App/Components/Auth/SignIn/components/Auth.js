import React, { Component } from "react";
import { connect } from "react-redux";
// import Loading from "../../../core/components/Loading/index";
import SignIn from './SignIn';

import { requestLogin , startLogin } from '../actions/auth';
import get from "lodash/get";
const _ = { get };

class Auth extends Component {
  
  render() {
    let authRedirect = null;
    // let spin;

    if (this.props.isAuthenticated) {
      authRedirect = this.props.navigation.navigate('Home');
    }

    // if (this.props.loading) {
    //   spin = <Loading loading={this.props.loading} />;
    // }

    let showScreen = <SignIn {...this.props} />;
    return (
      <div className="">
        {authRedirect}
        {/* {spin} */}
        {showScreen}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: _.get(state, "auth.name", null),
  error: _.get(state, "auth.error", {}),
  token: _.get(state, "auth.token", {}),
  loading: _.get(state, "auth.loading", false),
});

const mapDispatchToProps = dispatch => ({
  requestLogin: payload => dispatch(requestLogin(payload)),
  startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
