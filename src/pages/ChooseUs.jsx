import { Card, CardContent, Divider, Grid, Slide, Typography } from "@mui/material";
import cardData from "../constent";

const ChooseUs = () => {

  return (
    <div style={{ marginTop: "30px" }}>
      <Slide direction="right" in={true} timeout={800} mountOnEnter unmountOnExit>
        <div>
        <Divider style={{ borderBottomWidth: '3px', marginBottom:"10px" , backgroundColor: 'black' }} />
          <Typography variant="h3" align="center" gutterBottom >
            Why choose Decency?
          </Typography>
          <Divider style={{ borderBottomWidth: '3px', backgroundColor: 'black' }} />
        </div>
      </Slide>

      <Grid container spacing={3}>
        {cardData?.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              style={{
                height: '100%',
                margin: '20px',
                cursor: "pointer",
                backgroundColor:"white",
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '20px' }}>
                  {card.icon}
                </div>
                <Typography variant="h6" align="center" gutterBottom>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChooseUs;
