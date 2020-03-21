import React from "react";
import styled from "styled-components";

import Navbar from "../../components/navigation/navbar/Navbar";

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
`;

const Layout = ({ children }) => (
  <>
    <Navbar />
    <MainWrapper>{children}</MainWrapper>
  </>
);

export default Layout;