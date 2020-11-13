import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Form, FormGroup, FormText, Input, CustomInput, Button, Label, EmptyLayout, ThemeConsumer } from "./../../../components";

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

import { loginUserAction, checkLoginUserAction } from "../../../store/actions/authenticationActions";

function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    props.dispatch(loginUserAction({ email, password }));
  };

  return (
    <EmptyLayout>
      <EmptyLayout.Section center>
        {/* START Header */}
        <HeaderAuth title="Sign In to Application" />
        {/* END Header */}
        {/* START Form */}
        <Form className="mb-3" onSubmit={handleLogin}>
          <FormGroup>
            <Label for="emailAdress">Email Adress</Label>
            <Input type="email" name="email" id="emailAdress" placeholder="Enter email..." className="bg-white" />
            <FormText color="muted">We&amp;ll never share your email with anyone else.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Password..." className="bg-white" />
          </FormGroup>
          <FormGroup>
            <CustomInput type="checkbox" id="rememberPassword" label="Remember Password" inline />
          </FormGroup>
          <ThemeConsumer>
            {({ color }) => (
              <Button color={color} block>
                Sign In
              </Button>
            )}
          </ThemeConsumer>
        </Form>
        {/* END Form */}
        {/* START Bottom Links */}
        <div className="d-flex mb-5">
          <Link to="/forgotpassword" className="text-decoration-none">
            Forgot Password
          </Link>
          <Link to="/register" className="ml-auto text-decoration-none">
            Register
          </Link>
        </div>
        {/* END Bottom Links */}
        {/* START Footer */}
        <FooterAuth />
        {/* END Footer */}
      </EmptyLayout.Section>
    </EmptyLayout>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(Login);
