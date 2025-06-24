// src/components/QuestCard.js

import React, { useState, useEffect, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { useCurrentTime } from '../../hooks/useCurrentTime';

// --- STİL TANIMLAMALARI ---
// Bu bölüm, senin orijinal stil tanımlamalarını ve yeni eklemeleri içerir.

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border-left: 5px solid ${({ theme, status }) => {
    if (status === 'completed') return theme.colors.success;
    if (status === 'missed') return theme.colors.accent;
    if (status === 'available') return theme.colors.primary;
    return theme.colors.textSecondary;
  }};
  
  ${({ status }) => {
    if (status === 'locked') return css`opacity: 0.5; filter: grayscale(50%);`;
    if (status === 'missed') return css`opacity: 0.6; background-color: #3d2f2f;`;
  }}
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1; /* Butonun en altta kalmasını sağlar */
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  font-family: 'Courier New', Courier, monospace;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem;
  border-radius: 5px;
`;

const InfoBox = styled(TimerContainer)`
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: ${({ theme, status }) => {
      if (status === 'completed') return theme.colors.success;
      if (status === 'available') return theme.colors.primary;
      return '#444';
  }};
  color: white;
  border: none;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  font-weight: bold;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px -5px ${({ theme, status }) => status === 'available' ? theme.colors.primary + '77' : theme.colors.success + '77'};
  }
  
  &:disabled {
    background-color: #444;
    color: #888;
    cursor: not-allowed;
    opacity: 0.8;
    transform: none;
    box-shadow: none;
  }
`;

// --- YARDIMCI FONKSİYONLAR ---

const parseStandardTime = (timeStr) => {
    try {
        const [start, end] = timeStr.split('-');
        const [startH, startM] = start.split(':').map(Number);
        const [endH, endM] = end.split(':').map(Number);
        
        const startTime = new Date();
        startTime.setHours(startH, startM, 0, 0);

        const endTime = new Date();
        endTime.setHours(endH, endM, 0, 0);
        
        return { startTime, endTime };
    } catch (e) {
        return { startTime: null, endTime: null }; // Hatalı formatta çökmemesi için
    }
};

const formatDuration = (seconds) => {
    if (seconds < 0) seconds = 0;
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}


// --- ANA COMPONENT ---

function QuestCard({ protocol, onComplete, isCompleted }) {
    const currentTime = useCurrentTime();
    const [taskStartedTime, setTaskStartedTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);

    const taskInfo = useMemo(() => {
        const { time } = protocol;
        let taskType = 'STANDARD';
        let status = 'available';
        let displayInfo = time;
        let startTime = null;
        let endTime = null;

        // Görev türünü ve başlangıç/bitiş zamanlarını belirle
        if (time.includes('-')) {
            const parsed = parseStandardTime(time);
            startTime = parsed.startTime;
            endTime = parsed.endTime;
            if (!startTime) taskType = 'INFO'; // Hatalı formatı da bir tür olarak ele alalım
        } else {
            taskType = 'FLEXIBLE';
            displayInfo = time;
        }

        // Durumu hesapla
        if (isCompleted) {
            status = 'completed';
        } else if (taskType === 'STANDARD') {
            if (currentTime < startTime) status = 'locked';
            else if (currentTime > endTime) status = 'missed';
            else status = 'available';
        } else { // FLEXIBLE görevler her zaman müsaittir
            status = 'available';
        }
        
        const timeRemaining = endTime ? Math.floor((endTime - currentTime) / 1000) : 0;
        
        return { taskType, status, displayInfo, timeRemaining };

    }, [protocol.time, isCompleted, currentTime]);

    // Kronometre için useEffect
    useEffect(() => {
        let intervalId;
        if (taskStartedTime && taskInfo.taskType === 'STANDARD') {
            intervalId = setInterval(() => {
                setElapsedTime(Math.floor((new Date() - taskStartedTime) / 1000));
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [taskStartedTime, taskInfo.taskType]);

    const handleStart = () => {
        setTaskStartedTime(new Date());
        if (protocol.title.includes('SİMÜLASYON') || protocol.title.includes('DENEME')) {
            onComplete(protocol);
        }
    };
    
    // RENDER BÖLÜMÜ
    return (
        <Card status={taskInfo.status} isCompleted={isCompleted}>
            <CardHeader>
                <Title>{protocol.title}</Title>
            </CardHeader>

            <Description>{protocol.description}</Description>

            {taskInfo.taskType === 'STANDARD' ? (
                <TimerContainer>
                    <span>Kalan: {formatDuration(taskInfo.timeRemaining)}</span>
                    {taskStartedTime && <span>Geçen: {formatDuration(elapsedTime)}</span>}
                </TimerContainer>
            ) : (
                <InfoBox>{taskInfo.displayInfo}</InfoBox>
            )}

            {(() => {
                if (taskInfo.status === 'completed') {
                    return <ActionButton disabled status="completed">VERİ ELDE EDİLDİ</ActionButton>;
                }
                if (taskInfo.status === 'locked') {
                    return <ActionButton disabled>KİLİTLİ ({protocol.time.split('-')[0]})</ActionButton>;
                }
                if (taskInfo.status === 'missed') {
                    return <ActionButton disabled>GÖREV KAÇIRILDI</ActionButton>;
                }
                if (taskInfo.status === 'available') {
                    if (taskInfo.taskType !== 'STANDARD') {
                        return <ActionButton onClick={() => onComplete(protocol)} status="available">PROTOKOLÜ TAMAMLA</ActionButton>;
                    }
                    if (!taskStartedTime) {
                        return <ActionButton onClick={handleStart} status="available">PROTOKOLÜ BAŞLAT</ActionButton>;
                    }
                    return <ActionButton onClick={() => onComplete(protocol)} status="available">PROTOKOLÜ TAMAMLA</ActionButton>;
                }
                return null;
            })()}
        </Card>
    );
}

export default QuestCard;