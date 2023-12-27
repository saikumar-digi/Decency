import { Button, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Paper elevation={4} square  style={{backgroundColor:"#f5f2f2"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Decency
        </Typography>
        <Stack direction="row" spacing={10}>
          <Button onClick={() => navigate('/')} variant="text" color="inherit" sx={{ marginRight: '20px', color: 'black' }}>
            Home
          </Button>
          <Button onClick={() => navigate('/about')} variant="text" color="inherit" sx={{ marginRight: '20px', color: 'black' }}>
            About
          </Button>
          <Button onClick={() => navigate('/ContactUs')} variant="text" color="inherit" sx={{ color: 'black' }}>
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </Paper>
  );
};

export default NavBar;
