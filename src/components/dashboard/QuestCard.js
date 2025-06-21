import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme, isCompleted }) => isCompleted ? 'rgba(0, 148, 50, 0.1)' : theme.colors.surface};
  border-left: 5px solid ${({ theme, isCompleted }) => isCompleted ? theme.colors.primary : theme.colors.secondary};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.3s ease;
  opacity: ${({ isCompleted }) => isCompleted ? 0.6 : 1};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: 1.2rem;
`;

const Rewards = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: bold;
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
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
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

function QuestCard({ protocol, onComplete, isCompleted }) {
  const handleComplete = () => {
    onComplete(protocol);
  };

  return (
    <Card isCompleted={isCompleted}>
        <CardHeader>
            <Title>{protocol.title}</Title>
            <Rewards>
                <span>{protocol.ap} AP</span>
                <span>{protocol.vk} VK</span>
            </Rewards>
        </CardHeader>
        <Description>{protocol.time}</Description>
        <ActionButton onClick={handleComplete} disabled={isCompleted}>
            {isCompleted ? 'VERİ ELDE EDİLDİ' : 'PROTOKOLÜ TAMAMLA'}
        </ActionButton>
    </Card>
  );
}

export default QuestCard;