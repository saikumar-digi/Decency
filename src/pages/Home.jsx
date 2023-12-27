import { Button, Grid, Slide, Typography } from '@mui/material';
import OurServices from './OurServices';
import ChooseUs from './ChooseUs';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          padding: '20px',
          backgroundImage: `url('src/assets/home3.jpg')`, // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:"20px"
        }}
      >
        <Grid container spacing={3} style={{ textAlign: 'center', color: 'white' }}>
          <Grid item xs={12}>
            <Slide direction="left" in={true} timeout={800} mountOnEnter unmountOnExit>
              <Typography variant="h3" style={{ marginTop: '56px', marginLeft: '-140px', fontWeight: 'bold', fontSize: '4.5rem' }}>
                DECENCY
              </Typography>
            </Slide>
            <Slide direction="right" in={true} timeout={800} mountOnEnter unmountOnExit>
              <Typography variant="h3" style={{ marginTop: '-20px', marginLeft: '190px', fontWeight: 'bold', fontSize: '4.5rem' }}>
                CONSTRUCTION
              </Typography>
            </Slide>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={() => navigate('/Services we provide')}
            >
              Explore Services
            </Button>
          </Grid>
        </Grid>
      </div>
      <OurServices />
      <ChooseUs />
    </>
  );
};

export default Home;
