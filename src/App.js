import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import GitHubRepo from './GitHubRepo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}> Your GitHub name:
          <GitHubRepo />
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
