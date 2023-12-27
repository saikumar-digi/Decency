import Employee from "./Employee";
import { Container, Typography, Grid, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { items } from "../constent";

const About = () => {
  const renderCarouselItems = () => {
    return items.map((item, index) => (
      <Paper key={index} style={{margin:"10px"}}>
      <img
        src={item.image}
        alt={`Project ${index + 1}`}
        style={{
          width: "100%", 
          height: "400px",
          objectFit: "cover", 
        }}
      />
      <Typography variant="body1" style={{ padding: "10px" }}>
        {item.summary}
      </Typography>
    </Paper>
    ));
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={12}>
          <Carousel>{renderCarouselItems()}</Carousel>
        </Grid>
      </Grid>
      <Employee />
    </Container>
  );
};

export default About;
