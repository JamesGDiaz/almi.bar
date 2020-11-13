import React from "react";
import faker from "faker/locale/en_US";
import { Link } from "react-router-dom";

import { Sidebar, UncontrolledButtonDropdown, Avatar, DropdownToggle, DropdownMenu, DropdownItem } from "../../../components";
import { randomAvatar } from "../../../utilities";

const avatarImg = randomAvatar();

const SidebarTop = () => (
  <React.Fragment>
    {/* START: Sidebar Default */}
    <Sidebar.HideSlim>
      <Sidebar.Section className="pt-0">
        <Link to="/" className="d-block">
          <Sidebar.HideSlim>
            <Avatar.Image
              size="lg"
              src={avatarImg}
            />
          </Sidebar.HideSlim>
        </Link>

        <UncontrolledButtonDropdown>
          <DropdownToggle color="link" className="pl-0 pb-0 btn-profile sidebar__link">
            {faker.name.firstName()} {faker.name.lastName()}
            <i className="fa fa-angle-down ml-2"></i>
          </DropdownToggle>
          <DropdownMenu persist>
            <DropdownItem header>
              {faker.name.firstName()} {faker.name.lastName()}
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/login">
              <i className="fa fa-fw fa-sign-out mr-2"></i>
              Sign Out
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

export { SidebarTop };
