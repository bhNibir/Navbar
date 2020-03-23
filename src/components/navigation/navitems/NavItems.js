import React from "react";
import styled from "styled-components";

import NavItem from "./navitem/NavItem";

const Nav = styled.nav`
  display: flex;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile }) => {
  return (
    <Nav>
      <Ul mobile={mobile}>
        <NavItem link="/">home</NavItem>
        <NavItem link="/todos">todos</NavItem>
      </Ul>
    </Nav>
  );
};

export default NavItems;
