import React from "react"
import styled from "styled-components"
import LogoImage from "./LogoImage"
import { FaAlignRight } from "react-icons/fa"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HamburgerButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    color: var(--clr-primary-2);
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const NavHeader = ({ toggleSidebar }) => (
  <HeaderWrapper>
    <div style={{ width: "130px", marginBottom: "0.375rem" }}>
      <LogoImage />
    </div>
    <HamburgerButton onClick={toggleSidebar}>
      <FaAlignRight />
    </HamburgerButton>
  </HeaderWrapper>
)

export default NavHeader
