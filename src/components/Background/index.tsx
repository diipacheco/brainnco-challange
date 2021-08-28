import React from 'react';

import { Container } from './styles';

export interface IBackgroundProps {
  selectedLottery: string | undefined;
}

const Background: React.FC<IBackgroundProps> = ({
  selectedLottery,
  children,
}) => {
  return (
    <>
      <Container selectedLottery={selectedLottery}>{children}</Container>
    </>
  );
};

export default Background;
