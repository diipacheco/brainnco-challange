import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { useLotteries, LotteriesProvider } from '../../hooks/lotteries';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('LotteriesHook', () => {
  it('should be able to fetch lotteries', async () => {
    const apiResponse = [
      {
        id: 0,
        nome: 'mega-sena',
      },
      {
        id: 1,
        nome: 'quina',
      },
      {
        id: 2,
        nome: 'lotofácil',
      },
      {
        id: 3,
        nome: 'lotomania',
      },
      {
        id: 4,
        nome: 'timemania',
      },
      {
        id: 5,
        nome: 'dia de sorte',
      },
    ];

    apiMock.onGet('/loterias').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useLotteries(), {
      wrapper: LotteriesProvider,
    });

    result.current.fetchLotteries();

    await waitForNextUpdate();

    expect(result.current.lotteries).toEqual(apiResponse);
  });

  it('should be able to fetch contests from the lotteries', async () => {
    const lotteriesApiResponse = [
      {
        id: 0,
        nome: 'mega-sena',
      },
      {
        id: 1,
        nome: 'quina',
      },
      {
        id: 2,
        nome: 'lotofácil',
      },
      {
        id: 3,
        nome: 'lotomania',
      },
      {
        id: 4,
        nome: 'timemania',
      },
      {
        id: 5,
        nome: 'dia de sorte',
      },
    ];

    const contestsApiResponse = [
      {
        loteriaId: 0,
        concursoId: '2359',
      },
      {
        loteriaId: 1,
        concursoId: '5534',
      },
      {
        loteriaId: 2,
        concursoId: '2200',
      },
      {
        loteriaId: 3,
        concursoId: '2167',
      },
      {
        loteriaId: 4,
        concursoId: '1622',
      },
      {
        loteriaId: 5,
        concursoId: '440',
      },
    ];

    apiMock.onGet('/loterias').reply(200, lotteriesApiResponse);
    apiMock.onGet('/loterias-concursos').reply(200, contestsApiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useLotteries(), {
      wrapper: LotteriesProvider,
    });

    result.current.fetchLotteries();

    await waitForNextUpdate();

    result.current.fetchSelectedContests();

    await waitForNextUpdate();

    expect(result.current.selectedContest.concursoId).toEqual(2359);
  });

  it('should be a object empty value to the selected contest state if the contest filter returns undefined', async () => {
    const { result } = renderHook(() => useLotteries(), {
      wrapper: LotteriesProvider,
    });

    result.current.fetchSelectedContests();

    expect(result.current.selectedLottery).toEqual({});
  });

  it('should be able to fetch the contest result numbers from the lottery contest', async () => {
    const apiResponse = {
      id: '2359',
      loteria: 0,
      numeros: ['31', '32', '39', '42', '43', '51'],
      data: '2021-08-26T00:42:05.593Z',
    };

    apiMock.onGet('/concursos/2359').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useLotteries(), {
      wrapper: LotteriesProvider,
    });

    result.current.fetchContest(2359);

    await waitForNextUpdate();

    expect(result.current.contest).toEqual(apiResponse);
  });

  it('should be a object empty value to the contest state if the contestId are undefined', async () => {
    const { result } = renderHook(() => useLotteries(), {
      wrapper: LotteriesProvider,
    });

    result.current.fetchContest(Number(undefined));

    expect(result.current.contest).toEqual({});
  });
});
