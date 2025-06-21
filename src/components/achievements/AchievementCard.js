import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  opacity: ${({ isUnlocked }) => (isUnlocked ? 1 : 0.4)};
  filter: ${({ isUnlocked }) => (isUnlocked ? 'none' : 'grayscale(80%)')};
  border-left: 5px solid ${({ theme, isUnlocked }) => (isUnlocked ? theme.colors.primary : theme.colors.textSecondary)};
`;

const Icon = styled.div`
  font-size: 3rem;
  line-height: 1;
`;

const Info = styled.div`
  h3 {
    color: ${({ theme, isUnlocked }) => (isUnlocked ? theme.colors.text : theme.colors.textSecondary)};
    margin-bottom: 0.5rem;
  }
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
  }
`;

function AchievementCard({ achievement, isUnlocked }) {
  return (
    <CardWrapper isUnlocked={isUnlocked}>
      <Icon>{achievement.icon}</Icon>
      <Info isUnlocked={isUnlocked}>
        <h3>{achievement.name}</h3>
        <p>{achievement.description}</p>
      </Info>
    </CardWrapper>
  );
}

export default AchievementCard;