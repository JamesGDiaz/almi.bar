import React from "react";
import { Button } from "react-dom";
import PropTypes from "prop-types";

import { NavItem, NavLink } from "./../../components";

const NavbarUser = (props) => {
  const dispatchLogout = () => {
    console.log("logging out");
  };
  return (
    <NavItem {...props}>
      <NavLink tag={Button} onClick={dispatchLogout}>
        <i className="fa fa-power-off"></i>
      </NavLink>
    </NavItem>
  );
};
NavbarUser.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export { NavbarUser };
