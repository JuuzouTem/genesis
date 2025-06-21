import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.2rem;
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <StyledNavLink to="/" end>KONTROL PANELİ</StyledNavLink>
      <StyledNavLink to="/lab">LABORATUVAR</StyledNavLink>
      <StyledNavLink to="/achievements">KİLOMETRETAŞLARI</StyledNavLink>
    </NavContainer>
  );
}
export default Navbar;