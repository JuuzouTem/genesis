import React from 'react';
import styled from 'styled-components';
import { useUserProgress } from '../../contexts/UserProgressContext';

const StatusBarContainer = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const StatsGroup = styled.div`
  display: flex;
  gap: 2rem;
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.1rem;
`;

const Stat = styled.div`
  span {
    color: ${({ theme }) => theme.colors.secondary};
    margin-right: 0.5rem;
  }
`;

const DnaHelixContainer = styled.div`
    width: 250px;
    height: 20px;
    background: #333;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const DnaHelixProgress = styled.div`
    width: ${props => props.progress}%;
    height: 100%;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    transition: width 0.5s ease-in-out;
`;

function StatusBar() {
  const { ap, vk, level, LEVEL_THRESHOLDS } = useUserProgress();
  
  // DNA sarmalının tamamlanma yüzdesi (Son seviyeye göre)
  const totalApForCompletion = LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  const progressPercent = Math.min((ap / totalApForCompletion) * 100, 100);

  return (
    <StatusBarContainer>
      <StatsGroup>
        <Stat>YS: <span>{level}</span></Stat>
        <Stat>AP: <span>{ap}</span></Stat>
        <Stat>VK: <span>{vk}</span></Stat>
      </StatsGroup>
      <div>
        <DnaHelixContainer title={`Tamamlanma: %${progressPercent.toFixed(2)}`}>
            <DnaHelixProgress progress={progressPercent} />
        </DnaHelixContainer>
      </div>
    </StatusBarContainer>
  );
}

export default StatusBar;