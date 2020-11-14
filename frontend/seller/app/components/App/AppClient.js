import React, { useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from "./../../layout/default";
import { RoutedContent } from "./../../routes";

import { checkLoginUserAction } from "../../store/actions/authenticationActions";

const basePath = process.env.BASE_PATH || "/";

const AppClient = (props) => {
  const { login } = props;
  useEffect(() => {
    props.dispatch(checkLoginUserAction());
    return () => {};
  }, [props.login.authenticated]);

  return (
    <Router basename={basePath}>
      <AppLayout>
        <RoutedContent authenticated={login.authenticated} />
      </AppLayout>
    </Router>
  );
};
AppClient.propTypes = {
  dispatch: propTypes.func,
  authenticated: propTypes.bool,
  login: propTypes.object,
};

const mapStateToProps = (response) => ({
  login: response.login,
});

export default connect(mapStateToProps)(hot(module)(AppClient));
