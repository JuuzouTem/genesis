import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  position: relative;
  z-index: 100;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.2rem;
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

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text};
    margin: 5px 0;
    transition: 0.4s;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 2rem 0;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-150%')});
  transition: transform 0.3s ease-in-out;
`;

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLogout = async () => {
    closeMobileMenu();
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Çıkış yapılamadı:", error);
    }
  };

  const renderLinks = (isMobile = false) => {
    const clickHandler = isMobile ? closeMobileMenu : undefined;
    const logoutHandler = isMobile ? handleLogout : handleLogout;
    
    if (currentUser) {
      return (
        <>
          <StyledNavLink to="/" end onClick={clickHandler}>KONTROL PANELİ</StyledNavLink>
          <StyledNavLink to="/lab" onClick={clickHandler}>LABORATUVAR</StyledNavLink>
          <StyledNavLink to="/achievements" onClick={clickHandler}>KİLOMETRETAŞLARI</StyledNavLink>
          <LogoutButton onClick={logoutHandler}>ÇIKIŞ YAP</LogoutButton>
        </>
      );
    } else {
      return (
        <>
          <StyledNavLink to="/login" onClick={clickHandler}>GİRİŞ YAP</StyledNavLink>
          <StyledNavLink to="/signup" onClick={clickHandler}>KAYIT OL</StyledNavLink>
        </>
      );
    }
  };

  return (
    <NavContainer>
      <StyledNavLink to="/" onClick={closeMobileMenu}>Proje: Gen-esis</StyledNavLink>
      
      <NavLinks>
        {renderLinks()}
      </NavLinks>

      <HamburgerIcon onClick={toggleMobileMenu}>
        <div /><div /><div />
      </HamburgerIcon>

      <MobileMenu isOpen={isMobileMenuOpen}>
        {renderLinks(true)}
      </MobileMenu>
    </NavContainer>
  );
}

export default Navbar;