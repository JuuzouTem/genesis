// src/pages/DashboardPage.js

import React, { useMemo } from 'react';
import styled from 'styled-components';
import QuestCard from '../components/dashboard/QuestCard';
import StatusBar from '../components/layout/StatusBar';
import { protocols } from '../data/protocols';
import { useUserProgress } from '../contexts/UserProgressContext';
import { useSeason } from '../hooks/useSeason';
import { useCurrentTime } from '../hooks/useCurrentTime';

const DashboardWrapper = styled.div`
  position: relative;
  padding-top: 1.2rem;
`;

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem 2rem 2rem;
  
  /* EKLENECEK YENİ SATIRLAR */
  display: flex;
  flex-direction: column;
  justify-content: center; 
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

const StreakCounter = styled.div`
  position: absolute;
  top: -.2rem;
  right: 2.5rem;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.headings};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
`;

const QuestList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const parseTime = (timeStr) => {
    if (timeStr === 'Tüm Gün') {
        const startTime = new Date();
        startTime.setHours(0, 0, 0, 0);
        const endTime = new Date();
        endTime.setHours(23, 59, 59, 999);
        return { startTime, endTime };
    }
    const [start, end] = timeStr.split('-');
    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);
    const startTime = new Date();
    startTime.setHours(startH, startM, 0, 0);
    const endTime = new Date();
    endTime.setHours(endH, endM, 0, 0);
    return { startTime, endTime };
};


function DashboardPage() {
  const { completeProtocol, completedProtocols, streak } = useUserProgress();
  const { key: seasonKey, name: seasonName } = useSeason();
  const currentTime = useCurrentTime();

  const { activeProtocols, upcomingProtocols, missedProtocols, completedTodayProtocols } = useMemo(() => {
    const today = new Date().getDay();
    const todaysProtocols = (protocols[seasonKey] || []).filter(p =>
      Array.isArray(p.day) ? p.day.includes(today) : p.day === today
    );

    const active = [];
    const upcoming = [];
    const missed = [];
    const completed = [];

    todaysProtocols.forEach(p => {
        if (completedProtocols.has(p.id)) {
            completed.push(p);
            return;
        }

        const { startTime, endTime } = parseTime(p.time);
        if (currentTime < startTime) {
            upcoming.push(p);
        } else if (currentTime > endTime) {
            missed.push(p);
        } else {
            active.push(p);
        }
    });
    
    return { activeProtocols: active, upcomingProtocols: upcoming, missedProtocols: missed, completedTodayProtocols: completed };
  }, [seasonKey, currentTime, completedProtocols]);

  return (
    <DashboardWrapper>
      <StatusBar />
      <StreakCounter title={`${streak} Günlük Seri`}>
        <span>🔥</span>
        <span>{streak}</span>
      </StreakCounter>
      <DashboardContainer>
        <Header>
          <h1>Kontrol Paneli</h1>
          <p>Mevcut Sezon: {seasonName}</p>
        </Header>

        {activeProtocols.length > 0 && (
          <QuestList>
            {activeProtocols.map(p => <QuestCard key={p.id} protocol={p} onComplete={() => completeProtocol(p, seasonKey)} isCompleted={completedProtocols.has(p.id)} />)}
          </QuestList>
        )}

        {upcomingProtocols.length > 0 && (
          <>
            <Header style={{ marginTop: '3rem' }}><h1>Sıradaki Protokoller</h1></Header>
            <QuestList>
              {upcomingProtocols.map(p => <QuestCard key={p.id} protocol={p} onComplete={() => completeProtocol(p, seasonKey)} isCompleted={completedProtocols.has(p.id)} />)}
            </QuestList>
          </>
        )}
        
        {missedProtocols.length > 0 && (
          <>
            <Header style={{ marginTop: '3rem' }}><h1>Telafi Protokolleri</h1><p>Bu görevler seriyi etkilemez.</p></Header>
            <QuestList>
              {missedProtocols.map(p => <QuestCard key={p.id} protocol={p} onComplete={() => completeProtocol(p, seasonKey)} isCompleted={completedProtocols.has(p.id)} />)}
            </QuestList>
          </>
        )}
        
        {completedTodayProtocols.length > 0 && (
          <>
            <Header style={{ marginTop: '3rem' }}><h1>Tamamlanan Protokoller</h1></Header>
            <QuestList>
              {completedTodayProtocols.map(p => <QuestCard key={p.id} protocol={p} onComplete={() => completeProtocol(p, seasonKey)} isCompleted={completedProtocols.has(p.id)} />)}
            </QuestList>
          </>
        )}

      </DashboardContainer>
    </DashboardWrapper>
  );
}

export default DashboardPage;