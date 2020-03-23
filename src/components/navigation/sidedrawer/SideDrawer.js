import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../logo/Logo";
import NavItems from "../navitems/NavItems";
import Hamburger from "./hamburger/Hamburger";

const FixedWrapper = styled.div`
  position: fixed;
  background-color: var(--color-mainDark);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;
  z-index: 10;

  @media ${props => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  width: 100%;
`;

const Menu = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  height: 100vh;
  background-color: var(--color-mainDark);
  transform: translateY(${props => (props.opened ? "0%" : "-100%")});
  transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
`;

const SideDrawer = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <FixedWrapper>
        <Wrapper>
          <Logo />
          <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
        </Wrapper>
      </FixedWrapper>
      <Menu opened={isOpened}>
        <NavItems mobile />
      </Menu>
    </>
  );
};

export default SideDrawer;
