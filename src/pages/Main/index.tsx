import React from 'react';

import ResultNumbers from '../../components/ResultNumbers';

import { Container, Content, DisclaimerMessage } from './styles';
import Header from '../../components/Header';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <ResultNumbers />
        <DisclaimerMessage>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </DisclaimerMessage>
      </Content>
    </Container>
  );
};

export default Main;
