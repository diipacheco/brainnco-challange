import React from 'react';

import { LotteriesProvider } from './hooks/lotteries';
import Main from './pages/Main';
import Global from './styles/Global';

const App: React.FC = () => (
  <>
    <LotteriesProvider>
      <Main />
    </LotteriesProvider>
    <Global />
  </>
);

export default App;
