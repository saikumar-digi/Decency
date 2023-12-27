import { Grid, Typography, Avatar, Slide, Divider } from '@mui/material';
import styles from '../styles/Employee.module.css'
import { employees } from '../constent';

const Employee = () => {
  const employeeContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const avatarStyle = {
    width: '200px',
    height: '200px',
    transition: 'opacity 0.3s ease-in-out', 
  };



  return (
    <div>
    <div style={{marginTop:"20px" , marginBottom:"20px"}}>
          <Slide direction="right" in={true} timeout={800} mountOnEnter unmountOnExit>
      <div>
        <Typography variant="h3" align="center" gutterBottom className="animated-heading">
       Our Team      
                </Typography>
        <Divider style={{borderBottomWidth: '3px' ,backgroundColor:"black"}} />
      </div>
    </Slide>
    </div>

      <Grid container spacing={2}>
        {employees.map((employee, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div style={employeeContainerStyle}>
              <Avatar
                style={avatarStyle}
                alt={employee.name}
                src={employee.avatar}
                className={styles.hover_effect}
              />
              <Typography variant="h6" gutterBottom>
                {employee.name}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {employee.designation}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Employee;
