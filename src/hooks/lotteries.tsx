import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';

interface ILotteries {
  id: number | undefined;
  nome: string | undefined;
}

interface IContest {
  id: string;
  loteria: number;
  numeros: number[];
  data: string;
}

interface ISelectedContest {
  concursoId: number;
  loteriaId: number;
}

interface ILotteriesContextData {
  lotteries: ILotteries[];
  fetchLotteries(): Promise<void>;
  selectedLottery: ILotteries;
  handleSelectedLottery(nome: string): void;

  contest: IContest;
  fetchContest(contestId: number): Promise<void>;
  selectedContest: ISelectedContest;
  fetchSelectedContests(): Promise<void>;
}

const LotteriesContext = createContext<ILotteriesContextData>(
  {} as ILotteriesContextData,
);

export const LotteriesProvider: React.FC = ({ children }) => {
  /**
   * Lottery states
   */

  const [lotteries, setLotteries] = useState<ILotteries[]>([]);
  const [selectedLottery, setSelectedLottery] = useState<ILotteries>(
    {} as ILotteries,
  );

  /**
   * Contests states
   */
  const [contest, setContest] = useState<IContest>({} as IContest);
  const [selectedContest, setSelectedContest] = useState<ISelectedContest>(
    {} as ISelectedContest,
  );

  /**
   * Lottery handlers functions
   */

  const fetchLotteries = useCallback(async () => {
    const response = await api.get('/loterias');
    setLotteries(response.data);
  }, []);

  const handleSelectedLottery = useCallback(
    nome => {
      const lotteryId = lotteries?.find(lottery => lottery.nome === nome);
      setSelectedLottery({
        id: lotteryId?.id,
        nome: lotteryId?.nome?.toUpperCase(),
      });
    },
    [lotteries],
  );

  /**
   * Contest handlers functions
   */

  const filterSelectedContest = useCallback(
    (selectedContests: ISelectedContest[]) => {
      return selectedContests.find(
        item => item.loteriaId === selectedLottery.id,
      );
    },
    [selectedLottery],
  );

  const fetchSelectedContests = useCallback(async () => {
    const response = await api.get('/loterias-concursos');
    const contestsData: ISelectedContest[] = response.data;

    const contestFiltered = filterSelectedContest(contestsData);

    if (contestFiltered) {
      setSelectedContest({
        concursoId: Number(contestFiltered.concursoId),
        loteriaId: contestFiltered.loteriaId,
      });
    } else {
      setSelectedContest(state => state);
    }
  }, [filterSelectedContest]);

  const fetchContest = useCallback(async (contestId: number) => {
    if (contestId) {
      const response = await api.get(`/concursos/${contestId}`);
      setContest(response.data);
    } else {
      setContest(state => state);
    }
  }, []);

  useEffect(() => {
    if (lotteries.length > 1) {
      handleSelectedLottery(lotteries[0].nome);
    }
  }, [lotteries, handleSelectedLottery]);

  return (
    <LotteriesContext.Provider
      value={{
        lotteries,
        fetchLotteries,
        selectedLottery,
        handleSelectedLottery,
        fetchSelectedContests,
        selectedContest,
        contest,
        fetchContest,
      }}
    >
      {children}
    </LotteriesContext.Provider>
  );
};

export function useLotteries(): ILotteriesContextData {
  const context = useContext(LotteriesContext);

  return context;
}
