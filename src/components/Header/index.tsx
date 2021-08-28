import React, { useEffect, useMemo } from 'react';

import { useLotteries } from '../../hooks/lotteries';
import useWindowSize from '../../hooks/useWindowSize';
import logo from '../../assets/logo.svg';

import Background from '../Background';
import Select from '../Select';

import { Content } from './styles';

const Header: React.FC = () => {
  const { selectedLottery, selectedContest, fetchSelectedContests, contest } =
    useLotteries();
  const { width } = useWindowSize();

  const formatContestDate = useMemo(() => {
    if (contest?.data) {
      const date = new Date(contest?.data);
      return Intl.DateTimeFormat('pt-br').format(date);
    }
  }, [contest]);

  useEffect(() => {
    fetchSelectedContests();
  }, [fetchSelectedContests]);
  return (
    <Background selectedLottery={selectedLottery.nome}>
      <Select />
      <Content>
        <div className="logo-container">
          <img src={logo} alt="logo brain challenge" />
          <h1>{selectedLottery.nome}</h1>
        </div>

        {width && width <= 700 ? (
          <p>{`CONCURSO Nº ${selectedContest?.concursoId}`}</p>
        ) : (
          <div>
            <p>Concurso</p>
            <strong>{`${selectedContest?.concursoId} – ${formatContestDate}`}</strong>
          </div>
        )}
      </Content>
    </Background>
  );
};

export default Header;
