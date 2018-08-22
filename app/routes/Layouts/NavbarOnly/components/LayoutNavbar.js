import React from 'react';
import { Link } from 'react-router-dom';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    Avatar,
    AvatarAddOn,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NestedDropdown,
    UncontrolledDropdown,
    Form,
    Input,
    Container,
    UncontrolledCollapse
} from './../../../../components';

import { NavbarActivityFeed } from
    './../../../../layout/components/NavbarActivityFeed';
import { NavbarMessages } from
    './../../../../layout/components/NavbarMessages';
import { NavbarUser } from
    './../../../../layout/components/NavbarUser';

export const LayoutNavbar = () => (
    <React.Fragment>
        <Navbar navbar light expand>
            <Container>
                <NavbarBrand tag={ Link } to="/" className="pl-0 pr-2 text-primary">
                    <i className="fa fa-send mr-3"></i>
                    <span className="h5">
                        airframe
                    </span>
                </NavbarBrand>

                <Form inline className="ml-2 d-none d-sm-block">
                    <Input placeholder="Search..." />
                </Form>

                <Nav className="ml-auto" navbar>
                    <NavbarMessages className="ml-1" />
                    <NavbarActivityFeed className="ml-1" />
                    { /* START Navbar: Dropdown */}
                    <UncontrolledDropdown nav inNavbar className="ml-1">
                        <DropdownToggle nav>
                            <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="danger"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            /> 
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    { /* END Navbar: Dropdown */}
                    <NavbarUser className="ml-1" />
                </Nav>
            </Container>
        </Navbar>

        <Navbar navbar light expand="md">
            <Container>
                <h5 className="d-xs-block d-md-none my-0">
                    Navbar Only
                </h5>
                <NavbarToggler id="navbar-navigation-toggler" className="ml-auto">
                    <i className="fa fa-fw fa-bars"></i>
                </NavbarToggler>
                <UncontrolledCollapse navbar toggler="#navbar-navigation-toggler">
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={ Link } to="/">
                                <i className="fa fa-home"></i>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                Dashboards
                                <i className="fa fa-angle-down fa-fw ml-1"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag={ Link } to="/dashboards/analytics">Analytics</DropdownItem>
                                <DropdownItem tag={ Link } to="/dashboards/projects">Projects</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                Interface
                                <i className="fa fa-angle-down fa-fw ml-1"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag={ Link } to="/interface/colors">Colors</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/typography">Typography</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/buttons">Buttons</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/paginations">Paginations</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/images">Images</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/avatars">Avatars</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/progressbars">Progress Bars</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/badgeslabels">Badges & Labels</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/mediaobjects">Media Objects</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/listgroups">List Groups</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/alerts">Alerts</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/accordions">Accordions</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/tabspills">Tabs Pills</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/tooltipspopovers">Tooltips Popovers</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/dropdowns">Dropdowns</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/dropdowns">Modals</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/breadcrumbs">Breadcrumbs</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/navbars">Navbars</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NestedDropdown nav inNavbar>
                            <DropdownToggle nav>
                                Apps
                                <i className="fa fa-angle-down fa-fw ml-1"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <NestedDropdown.Submenu title="Projects">
                                    <DropdownItem tag={ Link } to="/apps/projects/list">Projects List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/projects/grid">Projects Grid</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Tasks">
                                    <DropdownItem tag={ Link } to="/apps/tasks/list">Tasks List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/grid">Tasks Grid</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/kanban">Tasks Kanban</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/details">Task Details</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Files">
                                    <DropdownItem tag={ Link } to="/apps/files/list">Files List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/files/grid">Files Grid</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Search Results">
                                    <DropdownItem tag={ Link } to="/apps/search-results">Search Results</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/images-results">Images Results</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/videos-results">Videos Results</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/users-results">Users Results</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Users">
                                    <DropdownItem tag={ Link } to="/apps/users/list">Users List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/users/grid">Users Grid</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Gallery">
                                    <DropdownItem tag={ Link } to="/apps/gallery-grid">Gallery Grid</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/gallery-table">Gallery Table</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Mailbox">
                                    <DropdownItem tag={ Link } to="/apps/inbox">Inbox</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/new-email">New Email</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/email-details">Email Details</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Profile">
                                    <DropdownItem tag={ Link } to="/apps/profile-details">Profile Details</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/profile-edit">Profile Edit</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/account-edit">Account Edit</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/billing-edit">Billing Edit</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/settings-edit">Settings Edit</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/sessions-edit">Sessions Edit</DropdownItem>
                                </NestedDropdown.Submenu>
                                <DropdownItem tag={ Link } to="/apps/clients">Clients</DropdownItem>
                                <DropdownItem tag={ Link } to="/apps/chat">Chat</DropdownItem>
                            </DropdownMenu>
                        </NestedDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                Pages                                 
                                <i className="fa fa-angle-down fa-fw ml-1"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag={ Link } to="/pages/register">Register</DropdownItem>
                                <DropdownItem tag={ Link } to="/pages/login">Login</DropdownItem>
                                <DropdownItem tag={ Link } to="/pages/forgot-password">Forgot Password</DropdownItem>
                                <DropdownItem tag={ Link } to="/pages/lock-screen">Lock Screen</DropdownItem>
                                <DropdownItem tag={ Link } to="/pages/error-404">Error 404</DropdownItem>
                                <DropdownItem tag={ Link } to="/pages/confirmation">Confirmation</DropdownItem>
                                <DropdownItem tag={ Link } to="/pages/success">Success</DropdownItem>
                                <DropdownItem tag={ Link } to="/pages/danger">Danger</DropdownItem>
                                <DropdownItem tag={ Link } to="/pages/coming-soon">Coming Soon</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                <i className="fa fa-ellipsis-h fa-fw"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Cards</DropdownItem>
                                <DropdownItem tag={ Link } to="/cards/cards">Cards</DropdownItem>
                                <DropdownItem tag={ Link } to="/cards/cardsheaders">Cards Headers</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Layouts</DropdownItem>
                                <DropdownItem tag={ Link } to="/layouts/navbar-only">Navbar Only</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Other</DropdownItem>
                                <DropdownItem tag={ Link } to="/tables/tables">Tables</DropdownItem>
                                <DropdownItem tag={ Link } to="/icons">Icons</DropdownItem>
                                <DropdownItem tag={ Link } to="/widgets">Widgets</DropdownItem>
                                <DropdownItem tag={ Link } to="/graphs/re-charts">Re Charts</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </UncontrolledCollapse>
            </Container>
        </Navbar>
    </React.Fragment>
);
