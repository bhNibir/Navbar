import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../logo/Logo";
// import NavItems from "../navitems/NavItems";
import Hamburger from "./hamburger/Hamburger";

const FixedWrapper = styled.div`
  position: fixed;
  background-color: var(--color-main);
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
  width: 100%;
  background-color: var(--color-mainDark);
  height: 100vh;
  opacity: ${props => (props.opened ? "1" : "0")};
  transform:; translateY(${props => (props.opened ? "100%" : "0%")});
  transition: all .25s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
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
      <Menu opened={isOpened}>hello, im the menu</Menu>
    </>
  );
};

export default SideDrawer;
