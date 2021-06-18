import React from 'react';
import { ItemCard, ItemImg, ItemOrderBtn } from './styles';

const Card = () => {
  return (
    <>
      <ItemCard>
        <ItemImg />
        <ItemOrderBtn>구매하기</ItemOrderBtn>
      </ItemCard>
    </>
  );
};

export default Card;
