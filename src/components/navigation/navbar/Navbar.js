import React from "react";
import styled from "styled-components";
import Logo from "../../logo/Logo";
import Container from "../../../hoc/layout/elements/Container";
import NavItems from "../navitems/NavItems";

const FixedWrapper = styled.div`
  position: fixed;
  background-color: var(--color-mainDark);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;

  @media ${props => props.theme.mediaQueries.smallest} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Navbar = () => {
  return (
    <>
      <FixedWrapper>
        <Container>
          <Wrapper>
            <Logo />
            <NavItems />
          </Wrapper>
        </Container>
      </FixedWrapper>
    </>
  );
};

export default Navbar;
