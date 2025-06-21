import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between; /* İkonu sağa yaslamak için */
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  position: relative; /* Menünün konumlanması için */
`;

// Masaüstünde görünecek linklerin kapsayıcısı
const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none; // Mobil görünümde bu linkleri gizle
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

// Mobil görünümde görünecek olan hamburger ikonu
const HamburgerIcon = styled.div`
  display: none; // Varsayılan olarak gizli
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block; // Mobil görünümde göster
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text};
    margin: 5px 0;
    transition: 0.4s;
  }
`;

// Hamburger menüye tıklandığında açılacak olan menü
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
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-150%')}); /* Açık/Kapalı animasyonu */
  transition: transform 0.3s ease-in-out;
  z-index: 100;
`;

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  return (
    <NavContainer>
      {/* Logo veya Proje Adı (İsteğe bağlı, sola yaslanacak) */}
      <StyledNavLink to="/" onClick={closeMobileMenu}>Proje: Gen-esis</StyledNavLink>
      
      {/* Masaüstü Linkleri */}
      <NavLinks>
        <StyledNavLink to="/" end>KONTROL PANELİ</StyledNavLink>
        <StyledNavLink to="/lab">LABORATUVAR</StyledNavLink>
        <StyledNavLink to="/achievements">KİLOMETRETAŞLARI</StyledNavLink>
      </NavLinks>

      {/* Hamburger Menü İkonu */}
      <HamburgerIcon onClick={toggleMobileMenu}>
        <div />
        <div />
        <div />
      </HamburgerIcon>

      {/* Mobil Menü (Açılır kapanır) */}
      <MobileMenu isOpen={isMobileMenuOpen}>
        <StyledNavLink to="/" end onClick={closeMobileMenu}>KONTROL PANELİ</StyledNavLink>
        <StyledNavLink to="/lab" onClick={closeMobileMenu}>LABORATUVAR</StyledNavLink>
        <StyledNavLink to="/achievements" onClick={closeMobileMenu}>KİLOMETRETAŞLARI</StyledNavLink>
      </MobileMenu>
    </NavContainer>
  );
}

export default Navbar;