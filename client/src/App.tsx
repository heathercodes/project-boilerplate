import React from 'react';
import { LandingPage } from './pages';
import { GlobalProvider } from './providers/GlobalProvider';
import './App.module.css';

function App(): React.ReactElement {
  return (
    <GlobalProvider>
      <div className="App">
        <LandingPage />
      </div>
    </GlobalProvider>
  );
}

export default App;
