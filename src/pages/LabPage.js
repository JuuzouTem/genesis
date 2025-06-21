import React from 'react';
import styled from 'styled-components';
import VirtualLab from '../components/lab/VirtualLab';
import LabShop from '../components/lab/LabShop';

const LabContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.h1`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
`;

function LabPage() {
  return (
    <div>
      <Header>Laboratuvar & Ekipman Terminali</Header>
      <LabContainer>
        <VirtualLab />
        <LabShop />
      </LabContainer>
    </div>
  );
}

export default LabPage;