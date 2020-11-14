import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import faker from "faker/locale/en_US";
import { Link } from "react-router-dom";
import { Button } from "react-dom";

import { Sidebar, UncontrolledButtonDropdown, Avatar, DropdownToggle, DropdownMenu, DropdownItem } from "../../../components";
import { randomAvatar } from "../../../utilities";

import { logoutUserAction } from "../../../store/actions/authenticationActions";

const avatarImg = randomAvatar();

const SidebarTop = (props) => {
  const { user } = props.login;

  const handleLogout = () => {
    props.dispatch(logoutUserAction());
  };

  return (
    <React.Fragment>
      {/* START: Sidebar Default */}
      <Sidebar.HideSlim>
        <Sidebar.Section className="pt-0">
          <Link to="/" className="d-block">
            <Sidebar.HideSlim>
              <Avatar.Image size="lg" src={avatarImg} />
            </Sidebar.HideSlim>
          </Link>

          <UncontrolledButtonDropdown>
            <DropdownToggle color="link" className="pl-0 pb-0 btn-profile sidebar__link">
              {user.name}
              <i className="fa fa-angle-down ml-2"></i>
            </DropdownToggle>
            <DropdownMenu persist>
              <DropdownItem header>{user.name}</DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Button} onClick={handleLogout}>
                <i className="fa fa-fw fa-sign-out mr-2"></i>
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <div className="small sidebar__link--muted">{faker.name.jobTitle()}</div>
        </Sidebar.Section>
      </Sidebar.HideSlim>
      {/* END: Sidebar Default */}

      {/* START: Sidebar Slim */}
      <Sidebar.ShowSlim>
        <Sidebar.Section>
          <Avatar.Image size="sm" src={avatarImg} />
        </Sidebar.Section>
      </Sidebar.ShowSlim>
      {/* END: Sidebar Slim */}
    </React.Fragment>
  );
};

SidebarTop.propTypes = {
  dispatch:propTypes.func,
  login: propTypes.object,
};

const mapStateToProps = (response) => ({
  login: response.login,
});

export default connect(mapStateToProps)(SidebarTop);
