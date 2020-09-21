import React from 'react';
import './App.css';
import GitHubRepo from './GitHubRepo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Your GitHub name:
        <GitHubRepo />
      </header>
    </div>
  );
}

export default App;
