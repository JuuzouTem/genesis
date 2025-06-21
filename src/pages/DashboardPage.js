import React from 'react';
import styled from 'styled-components';
import QuestCard from '../components/dashboard/QuestCard';
import StatusBar from '../components/layout/StatusBar';
import { protocols } from '../data/protocols';
import { useUserProgress } from '../contexts/UserProgressContext';
import { useSeason } from '../hooks/useSeason';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem 2rem;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
  }
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
  }
`;

const QuestList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

function DashboardPage() {
  const { completeProtocol, completedProtocols } = useUserProgress();
  const { key: seasonKey, name: seasonName } = useSeason();

  const today = new Date().getDay();
  // DÜZELTME: Pazar günü için dayIndex 0 olmalı, veritabanını ona göre güncelleyeceğiz.
  const dayIndex = today;

  const activeProtocols = protocols[seasonKey] || [];
  const todaysProtocols = activeProtocols.filter(p => 
      Array.isArray(p.day) ? p.day.includes(dayIndex) : p.day === dayIndex
  );

  return (
    <>
      <StatusBar />
      <DashboardContainer>
        <Header>
          <h1>Kontrol Paneli</h1>
          <p>Mevcut Sezon: {seasonName} | Protokoller</p>
        </Header>
        <QuestList>
          {todaysProtocols.length > 0 ? (
            todaysProtocols.map(protocol => (
              <QuestCard 
                key={protocol.id} 
                protocol={protocol}
                onComplete={completeProtocol}
                isCompleted={completedProtocols.has(protocol.id)}
              />
            ))
          ) : (
            <p>Bugün için planlanmış bir protokol bulunmuyor. Zihinsel Dekontaminasyon için iyi bir gün.</p>
          )}
        </QuestList>
      </DashboardContainer>
    </>
  );
}

export default DashboardPage;