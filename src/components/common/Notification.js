import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const NotificationWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.1rem;
  z-index: 1000;
  animation: ${fadeInOut} 4s forwards;
`;

function Notification({ message }) {
  if (!message) return null;
  return <NotificationWrapper>{message}</NotificationWrapper>;
}

export default Notification;