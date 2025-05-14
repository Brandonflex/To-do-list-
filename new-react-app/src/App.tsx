import React from 'react';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <p>This is the main content of the app.</p>
      </main>
    </div>
  );
};

export default App;