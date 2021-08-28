import React, { useEffect } from 'react';

import { useLotteries } from '../../hooks/lotteries';

import { Container } from './styles';

const Select: React.FC = () => {
  const { lotteries, fetchLotteries, handleSelectedLottery } = useLotteries();

  useEffect(() => {
    fetchLotteries();
  }, [fetchLotteries]);

  return (
    <>
      <Container
        data-testid="select"
        onChange={event => handleSelectedLottery(event.target.value)}
      >
        {lotteries?.map(lottery => (
          <option
            data-testid={`selected-option-${lottery.id}`}
            key={lottery.id}
            value={lottery.nome}
          >
            {lottery.nome?.toUpperCase()}
          </option>
        ))}
      </Container>
    </>
  );
};

export default Select;
