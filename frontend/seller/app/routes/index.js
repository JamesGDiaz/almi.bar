import React, { useEffect } from "react";
import propTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router";
import { connect } from "react-redux";
import { checkLoginUserAction } from "../store/actions/authenticationActions";

// ----------- Pages Imports ---------------
import Analytics from "./Dashboards/Analytics";
import ProfileDetails from "./Apps/ProfileDetails";

import ProfileEdit from "./Apps/ProfileEdit";
import SettingsEdit from "./Apps/SettingsEdit";
import AccountEdit from "./Apps/AccountEdit";

import Confirmation from "./Pages/Confirmation";
import Danger from "./Pages/Danger";
import Error404 from "./Pages/Error/Error404";
import Error500 from "./Pages/Error/Error500";
import ForgotPassword from "./Pages/ForgotPassword";
import LockScreen from "./Pages/LockScreen";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Success from "./Pages/Success";

//------- Private Route Component --------
const PrivateRoute = ({ component: Component, authenticated, lazy, ...rest }) =>
  lazy ? (
    <Route
      {...rest}
      exact
      render={(props) =>
        authenticated ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
          </React.Suspense>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  ) : (
    <Route {...rest} exact render={(props) => (authenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
  );
PrivateRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.element, propTypes.func]),
  authenticated: propTypes.bool,
  lazy: propTypes.bool,
};

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = (props) => {

  return (
    <Switch>
      <Redirect from="/" to="/dashboard" exact />

      <PrivateRoute exact path="/dashboard" component={Analytics} authenticated={props.authenticated} />

      <PrivateRoute lazy exact path="/profile" component={ProfileDetails} authenticated={props.authenticated} />
      <PrivateRoute lazy exact path="/profile/edit" component={ProfileEdit} authenticated={props.authenticated} />
      <PrivateRoute lazy exact path="/profile/edit/security" component={AccountEdit} authenticated={props.authenticated} />
      <PrivateRoute lazy exact path="/profile/edit/notifications" component={SettingsEdit} authenticated={props.authenticated} />

      <PrivateRoute lazy exact path="/products" component={Analytics} authenticated={props.authenticated} />
      <PrivateRoute lazy exact path="/products/create" component={Analytics} authenticated={props.authenticated} />
      <PrivateRoute lazy exact path="/products/inventory" component={Analytics} authenticated={props.authenticated} />

      <PrivateRoute lazy exact path="/orders" component={Analytics} authenticated={props.authenticated} />

      <PrivateRoute lazy exact path="/sales" component={Analytics} authenticated={props.authenticated} />

      <PrivateRoute lazy exact path="/payments" component={Analytics} authenticated={props.authenticated} />

      <PrivateRoute lazy exact path="/stats" component={Analytics} authenticated={props.authenticated} />

      <PrivateRoute lazy exact path="/shipping" component={Analytics} authenticated={props.authenticated} />

      <PrivateRoute lazy exact path="/preferences" component={Analytics} authenticated={props.authenticated} />

      {/*    Pages Routes    */}
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={ForgotPassword} path="/recovery" />
      <Route component={LockScreen} path="lock-screen" />
      <Route component={Success} path="/success" />
      <Route component={Confirmation} path="/confirmation" />
      <Route component={Danger} path="/danger" />

      <Route component={Error404} path="/404" />
      <Route component={Error500} path="/500" />

      {/*    404    */}
      <Redirect to="/404" />
    </Switch>
  );
};

RoutedContent.propTypes = {
  authenticated: propTypes.bool,
};

