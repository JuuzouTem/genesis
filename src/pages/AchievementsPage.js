import React from 'react';
import styled from 'styled-components';
import { useUserProgress } from '../contexts/UserProgressContext';
import { allAchievements } from '../data/achievements';
import AchievementCard from '../components/achievements/AchievementCard';

const AchievementsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

function AchievementsPage() {
  const { unlockedAchievements } = useUserProgress();

  return (
    <AchievementsContainer>
      <Header>Araştırma Kilometretaşları</Header>
      <Grid>
        {allAchievements.map(ach => (
          <AchievementCard 
            key={ach.id} 
            achievement={ach} 
            isUnlocked={unlockedAchievements.has(ach.id)}
          />
        ))}
      </Grid>
    </AchievementsContainer>
  );
}

export default AchievementsPage;