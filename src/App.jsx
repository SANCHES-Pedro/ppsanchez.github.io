import * as React from 'react';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" >
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Hey, I'm Pedro
      </Typography>
      <Typography variant="body1" align="center">
        Welcome to my personal website.
      </Typography>
    </Container>
  );
}

export default App;
