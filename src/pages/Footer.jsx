import { Box, Container, Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from "../styles/Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<Container maxWidth="xl">
				<Grid container spacing={1}>
					<Grid item md={3}>
						<Typography variant="button" gutterBottom display="block">
							ABOUT
						</Typography>
						<Box>
							<Link href="/" underline="hover" color="white">
								Contact Us
							</Link>
						</Box>
						<Box>
							<Link href="/" underline="hover" color="white">
								About Us
							</Link>
						</Box>
						<Box>
							<Link href="/" underline="hover" color="white">
								Careers
							</Link>
						</Box>
						<Box>
							<Link href="/" underline="hover" color="white">
								Corporate Information
							</Link>
						</Box>
					</Grid>
				
					<Grid item md={3}>
      <Typography variant="button" gutterBottom display="block" >
        Contact Us
      </Typography>
      <Box>
        <Link href="https://www.instagram.com" underline="hover" color="white">
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          Instagram
        </Link>
      </Box>
      <Box>
        <Link href="https://www.facebook.com" underline="hover" color="white">
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          Facebook
        </Link>
      </Box>
      <Box>
        <Link href="https://www.twitter.com" underline="hover" color="white">
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          Twitter
        </Link>
      </Box>
    </Grid>
	<Grid item md={3}>
      <Typography variant="button" gutterBottom display="block">
        REGISTERED OFFICE ADDRESS
      </Typography>
      <Typography variant="subtitle2" display="block" gutterBottom  color="white">
        Kadarkoppa Road, Near SBI Bank,
      </Typography>
      <Typography variant="subtitle2" display="block" gutterBottom  color="white">
        5th block, LOKAPUR, TQ:Mudol , DT:Bagalkote
      </Typography>
      <Typography variant="subtitle2" display="block" gutterBottom  color="white">
        587122, Karnataka, India.
      </Typography>
    </Grid>
	<Grid item md={3}>
  <Typography variant="button" gutterBottom display="block">
OFFICE LOCATION
  </Typography>
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3832.167685686567!2d75.37109187513776!3d16.160300684532498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDA5JzM3LjEiTiA3NcKwMjInMjUuMiJF!5e0!3m2!1sen!2sin!4v1703673391711!5m2!1sen!2sin"
      width="250"
      height="100"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</Grid>
				</Grid>
				
			</Container>
			<Grid item md={12}>
				<Divider sx={{ height: "1px", bgcolor: "white" }} />
			</Grid>
			<Container maxWidth="md">
				<Grid container m="5px" marginBottom="5px" marginLeft="270px">
					<Grid item md={6}>
						<Typography variant="subtitle2" display="block" gutterBottom>
							Copyright ©️
							2023 Decency Corp. Created by AVS.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
}

export default Footer;
