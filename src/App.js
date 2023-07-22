import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography, OutlinedInput, Button, InputAdornment, InputLabel } from '@mui/material';
import FlamesResult from './FlamesResult';
import calculateFlames from './flamesCalculator';

import yourImage from './give-love.png';
import bicon from './boy_145867.png';
import ficon from './girl_4329447.png';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&$outlined $notchedOutline': {
            borderColor: 'blue', // Change the outline color to blue
          },
          '&:hover:not($focused) $notchedOutline': {
            borderColor: 'blue', // Change the outline color to blue on hover
          },
          '&$focused $notchedOutline': {
            borderColor: 'blue', // Change the outline color to blue when focused
          },
        },
      },
    },
  },
});

const App = () => {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [flamesResult, setFlamesResult] = useState('');

  const handleCalculateFlames = () => {
    // Replace this with your Flames calculation logic
    const result = calculateFlames(yourName, partnerName);
    setFlamesResult(result);
    setYourName(''); // Clear the input fields
    setPartnerName(''); // Clear the input fields
  };

  const handleCloseResult = () => {
    setFlamesResult(''); // Reset the result and close the overlay
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          backgroundSize: 'cover', // Set "friends" image as the background
          backgroundPosition: 'center', // Adjust as needed to position the image
          padding: '40px',
          borderRadius: '10px',
        }}
      >
        {/* Your PNG image */}
        <img
          src={yourImage}
          alt="Your Image"
          style={{
            maxWidth: '35%',
            marginTop: '20px', // Adjust the margin to control the distance between images
            borderRadius: '50px',
          }}
        />

        <div style={{ marginLeft: '30px', maxWidth: '400px' }}>
          {/* Use Typography component for the heading */}
          <Typography variant="h1" align="center" gutterBottom>
            Flames Game
          </Typography>
          <form>
            <InputLabel htmlFor="your-name">Your Name</InputLabel>
            <OutlinedInput
              id="your-name"
              label="Your Name"
              fullWidth
              margin="normal"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              sx={{ mb: 2, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'blue' } }}
              endAdornment={ // Add the female icon (ficon) to the right corner
                <InputAdornment position="end">
                  <img src={bicon} alt="ficon" style={{ width: '20px', height: '20px' }} />
                </InputAdornment>
              }
            />
            <InputLabel htmlFor="partner-name">Partner's Name</InputLabel>
            <OutlinedInput
              id="partner-name"
              label="Partner's Name"
              fullWidth
              margin="normal"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              sx={{ mb: 2, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'blue' } }}
              endAdornment={ // Add the male icon (bicon) to the right corner
                <InputAdornment position="end">
                  <img src={ficon} alt="bicon" style={{ width: '20px', height: '20px' }} />
                </InputAdornment>
              }
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleCalculateFlames}>
              Calculate Flames
            </Button>
          </form>
          <FlamesResult result={flamesResult} onClose={handleCloseResult} />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;








