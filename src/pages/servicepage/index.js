import React, { memo } from 'react';
import Card from '../../components/Card';
import { CardWrapper } from './styles';

const ServicePage = () => {
  return (
    <CardWrapper>
      <Card></Card>;<Card></Card>;<Card></Card>;<Card></Card>;<Card></Card>;
      <Card></Card>;<Card></Card>;
    </CardWrapper>
  );
};

export default memo(ServicePage);
