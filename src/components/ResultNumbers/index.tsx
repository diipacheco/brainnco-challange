import React, { useEffect } from 'react';
import { useLotteries } from '../../hooks/lotteries';

import { Container, NumbersList } from './styles';

const ResultNumbers: React.FC = () => {
  const { contest, fetchContest, selectedContest } = useLotteries();

  useEffect(() => {
    fetchContest(selectedContest.concursoId);
  }, [fetchContest, selectedContest]);

  return (
    <Container>
      <NumbersList>
        {contest?.numeros?.map(numbers => (
          <li data-testid="result-number-list" key={numbers}>
            {numbers}
          </li>
        ))}
      </NumbersList>
    </Container>
  );
};

export default ResultNumbers;
