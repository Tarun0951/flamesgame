import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h5: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: 'linear-gradient(to right, #007BFF, #00A5E5)', // Blue gradient
          color: '#FFFFFF', // White text color
          '&:hover': {
            background: 'linear-gradient(to right, #007BFF, #00A5E5)', // Blue gradient on hover
          },
        },
      },
    },
  },
});

const FlamesResult = ({ result, onClose }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: 'linear-gradient(135deg, #ffffff, #e8e4cd)',
          margin: 0,
          padding: 0,
          fontFamily: 'Arial, sans-serif',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Dialog open={Boolean(result)} onClose={onClose} fullWidth maxWidth="xs">
          <DialogTitle>
            <Typography variant="h5" align="center" gutterBottom>
              Flames Result
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ background: 'linear-gradient(to right, #F05F57, #360940)', color: '#FFFFFF', padding: '16px' }}>
            <Typography variant="h6" align="center" gutterBottom>
              {result}
            </Typography>
            <Typography variant="body1" align="center" sx={{ marginBottom: '16px' }}>
              Congratulations! You've got your Flames result. We hope you enjoyed playing the Flames Game!
            </Typography>
            <Button variant="contained" color="primary" fullWidth onClick={onClose}>
              Close
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default FlamesResult;

