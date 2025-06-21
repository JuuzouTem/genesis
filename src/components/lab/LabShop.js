import React from 'react';
import styled from 'styled-components';
import { labItems } from '../../data/labItems';
import ShopItemCard from './ShopItemCard';

const ShopContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  padding: 1.5rem;
  height: 600px;
  overflow-y: auto;
`;

function LabShop() {
  return (
    <ShopContainer>
      {labItems.map(item => <ShopItemCard key={item.id} item={item} />)}
    </ShopContainer>
  );
}
export default LabShop;