import React from 'react';
import styled from 'styled-components';
import { useUserProgress } from '../../contexts/UserProgressContext';

const LabWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  height: 600px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 1rem;
`;

const LabItem = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.secondary};
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

// Satın alınan eşyaların yerleşimini burada belirliyoruz
const itemPositions = {
  item_poster_dna: { top: '5%', left: '40%', content: '🧬 DNA Posteri' },
  item_whiteboard: { top: '5%', right: '5%', width: '150px', height: '100px', content: '📈 Fikir Panosu' },
  item_monitor: { bottom: '22%', left: '45%', content: '🖥️ Çift Monitör' },
  item_microscope: { bottom: '22%', right: '15%', content: '🔬 Mikroskop' },
  item_plant: { bottom: '22%', left: '20%', content: '🌿 Bitki' },
};

const Desk = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: #332;
  border-top: 5px solid #543;
`;

function VirtualLab() {
  const { purchasedItems } = useUserProgress();
  return (
    <LabWrapper>
      <Desk />
      {Array.from(purchasedItems).map(itemId => {
        const pos = itemPositions[itemId];
        if (!pos) return null;
        return <LabItem key={itemId} style={pos}>{pos.content}</LabItem>;
      })}
    </LabWrapper>
  );
}

export default VirtualLab;