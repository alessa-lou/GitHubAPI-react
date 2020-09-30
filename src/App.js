import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import GitHubRepo from './GitHubRepoNew'
import GitHubRepoNew from './GitHubRepoNew'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>Your Github Repos:
          <GitHubRepo />
          </Grid>
          <Grid item xs={4}>Your Pinned Repos:
          <GitHubRepoNew />
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
