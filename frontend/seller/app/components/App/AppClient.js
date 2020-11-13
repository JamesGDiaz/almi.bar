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
  useEffect(() => {
    console.log("checkinglogin");
    props.dispatch(checkLoginUserAction());
    console.log("myprops", props);
    return () => {};
  }, []);

  return (
    <Router basename={basePath}>
      <AppLayout>
        <RoutedContent authenticated={props.authenticated} />
      </AppLayout>
    </Router>
  );
};
AppClient.propTypes = {
  dispatch: propTypes.func,
  authenticated: propTypes.bool,
};

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(hot(module)(AppClient));
