import  { useState } from 'react';
import { Grid, Typography, TextField, Stack, Paper, Button } from '@mui/material';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    toast.success('We Will Contact You Shortly', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // 3 seconds
    });

    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
    });
    event.preventDefault();
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Paper elevation={3} style={{ padding: '20px', margin: '10px', marginBottom: '50px', textAlign: 'center' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <FiMail size={32} color="black" />
            <Typography variant="body1">decencyconstruction05@gmail.com</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FiPhone size={32} color="black" />
            <Typography variant="body1">+91 90082 67805</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FiMapPin size={32} color="black" />
            <Typography variant="body1"> Kadarkoppa Road, Near SBI Bank, Mudol</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Stack direction="row" spacing={10}>
        <Grid item xs={12} md={6} style={{ textAlign: 'left' }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleInputChange('name')}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.phoneNumber}
            onChange={handleInputChange('phoneNumber')}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleInputChange('email')}
          />
          <Button style={{ marginLeft: '600px', marginTop: '20px' }} onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: 'right' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3832.167685686567!2d75.37109187513776!3d16.160300684532498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDA5JzM3LjEiTiA3NcKwMjInMjUuMiJF!5e0!3m2!1sen!2sin!4v1703673391711!5m2!1sen!2sin"
            width="450"
            height="250"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Stack>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ContactUs;
