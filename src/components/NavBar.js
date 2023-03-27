

import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div style={{}} >
        <Navbar style={{backgroundImage:"linear-gradient(#D82E2F,rgb(161, 65, 65),rgb(77, 63, 50))"}} light>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <NavbarBrand href="/home" className="mr-auto " style={{color:"rgb(236, 132, 13)",fontWeight:"700"}}>BTECH BIRIYANI</NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="/home" style={{color:"rgb(236, 132, 13)",fontWeight:"700"}}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart" style={{color:"rgb(236, 132, 13)",fontWeight:"700"}}>Cart</NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
            </Nav>
          </Collapse>
          <NavItem>
                <NavLink href="/home" style={{color:"white",fontWeight:"900"}}>Home</NavLink>
              </NavItem>
          <NavItem>
                <NavLink href="/cart" style={{color:"white",fontWeight:"900"}}>Cart</NavLink>
              </NavItem>
        </Navbar>
      </div>
    );
  }
}
