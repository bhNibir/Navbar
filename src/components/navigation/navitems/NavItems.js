import React from "react";
import styled from "styled-components";

import NavItem from "./navitem/NavItem";

const Nav = styled.nav`
  display: flex;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavItems = () => {
  return (
    <Nav>
      <Ul>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
      </Ul>
    </Nav>
  );
};

export default NavItems;
