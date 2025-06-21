import React, { useState, useEffect, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { useCurrentTime } from '../../hooks/useCurrentTime';

// Zamanı parse etmek için yardımcı fonksiyon
const parseTime = (timeStr) => {
    const [start, end] = timeStr.split('-');
    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);

    const startTime = new Date();
    startTime.setHours(startH, startM, 0, 0);

    const endTime = new Date();
    endTime.setHours(endH, endM, 0, 0);
    
    return { startTime, endTime };
};

// ... Stil tanımlamaları (Card, Title vs.) ...
const TimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

// Card stiline yeni durumlar ekleyelim
const Card = styled.div`
  /* ... önceki stiller ... */
  ${({ status }) => {
    if (status === 'locked') return css`opacity: 0.4; filter: grayscale(80%);`;
    if (status === 'missed') return css`border-left-color: ${({ theme }) => theme.colors.accent}; opacity: 0.5;`;
  }}
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.secondary};
  }
  
  &:disabled {
    background-color: #444;
    color: #888;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

function formatDuration(seconds) {
    if (seconds < 0) seconds = 0;
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function QuestCard({ protocol, onComplete, isCompleted }) {
    const currentTime = useCurrentTime();
    const [taskStartedTime, setTaskStartedTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);

    const { startTime, endTime } = useMemo(() => parseTime(protocol.time), [protocol.time]);

    const status = useMemo(() => {
        if (isCompleted) return 'completed';
        if (currentTime < startTime) return 'locked';
        if (currentTime > endTime) return 'missed';
        return 'available';
    }, [currentTime, startTime, endTime, isCompleted]);

    useEffect(() => {
        if (taskStartedTime) {
            const interval = setInterval(() => {
                setElapsedTime(Math.floor((new Date() - taskStartedTime) / 1000));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [taskStartedTime]);

    const handleStart = () => {
        setTaskStartedTime(new Date());
        // Denemeler için başladığında tamamlanmış sayılır (seri için)
        if (protocol.title.includes('SİMÜLASYON')) {
            onComplete(protocol);
        }
    };
    
    const timeRemaining = Math.floor((endTime - currentTime) / 1000);

    return (
        <Card status={status} isCompleted={isCompleted}>
            {/* ... CardHeader, Description ... */}
            <TimerContainer>
                <span>Bitişe Kalan: {formatDuration(timeRemaining)}</span>
                {taskStartedTime && <span>Geçen Süre: {formatDuration(elapsedTime)}</span>}
            </TimerContainer>

            {status === 'locked' && <ActionButton disabled>KİLİTLİ (Başlangıç: {protocol.time.split('-')[0]})</ActionButton>}
            {status === 'available' && !taskStartedTime && <ActionButton onClick={handleStart}>PROTOKOLÜ BAŞLAT</ActionButton>}
            {status === 'available' && taskStartedTime && !isCompleted && <ActionButton onClick={() => onComplete(protocol)}>PROTOKOLÜ TAMAMLA</ActionButton>}
            {status === 'completed' && <ActionButton disabled>VERİ ELDE EDİLDİ</ActionButton>}
            {status === 'missed' && <ActionButton disabled>GÖREV KAÇIRILDI</ActionButton>}
        </Card>
    );
}

export default QuestCard;