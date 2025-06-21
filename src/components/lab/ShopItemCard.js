import React from 'react';
import styled from 'styled-components';
import { useUserProgress } from '../../contexts/UserProgressContext';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.surface};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const ItemName = styled.h4`
  color: ${({ theme }) => theme.colors.text};
`;

const ItemCost = styled.span`
  font-family: ${({ theme }) => theme.fonts.headings};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;

const ItemDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const PurchaseButton = styled.button`
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
  }
`;

function ShopItemCard({ item }) {
  const { vk, purchasedItems, purchaseLabItem } = useUserProgress();
  const isPurchased = purchasedItems.has(item.id);
  const canAfford = vk >= item.cost;

  return (
    <Card>
      <ItemHeader>
        <ItemName>{item.name}</ItemName>
        <ItemCost>{item.cost} VK</ItemCost>
      </ItemHeader>
      <ItemDescription>{item.description}</ItemDescription>
      <PurchaseButton
        onClick={() => purchaseLabItem(item)}
        disabled={isPurchased || !canAfford}
      >
        {isPurchased ? 'ENVANTERDE' : (canAfford ? 'SATIN AL' : 'YETERSİZ KREDİ')}
      </PurchaseButton>
    </Card>
  );
}

export default ShopItemCard;