import React from 'react';
import AxiosApp from './AxiosApp';
import FetchApp from './FetchApp';
import ApolloApp from './ApolloApp';
import ApolloHooksApp from './ApolloHooksApp';

function App() {
  return (
    <div className="App">
      <AxiosApp />
      <FetchApp />
      <ApolloApp />
      <ApolloHooksApp />
    </div>
  );
}

export default App;
