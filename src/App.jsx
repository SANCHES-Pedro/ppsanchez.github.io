import * as React from 'react';
import './App.css'; // Import the CSS file where you will add the global styles
import backgroundImage from '/background.jpg'; // Make sure to use the correct path

import { Container, Typography, IconButton, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import SchoolIcon from '@mui/icons-material/School'; // Assuming this for Google Scholar

function App() {
  return (
    <Container 
    style={{
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      color: 'white'
    }}
    >
    <div className="overlay"></div> 
    <Box  
      className="content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
        <Typography variant="h2" gutterBottom>
          Hey, I'm Pedro
        </Typography>
        <Typography variant="body1">
          Welcome to my personal website.
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bgcolor="background.paper" // Use theme's paper color for the background
        boxShadow={3} // Optional: adds shadow to the bar for better visibility
        style={{ padding: '10px 0' }} // Add padding for aesthetic spacing
      >
        <IconButton aria-label="LinkedIn" component="a" href="https://www.linkedin.com/in/pedro-sanches-ppsg" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="GitHub" component="a" href="https://github.com/SANCHES-Pedro" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="Twitter" component="a" href="https://twitter.com/SnchzPedro_" target="_blank">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="Google Scholar" component="a" href="https://scholar.google.com/citations?user=KPchGe4AAAAJ&hl=en" target="_blank">
          <SchoolIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

export default App;
