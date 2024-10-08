import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                px: { xs: 2, sm: 4 },
                backgroundColor: '#283445',
                color: 'white',
                mt: 4,
            }}
        >
            <Grid container spacing={4} justifyContent="center">
                {/* Section 1: About Us */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi quas vero distinctio rerum recusandae optio magni corrupti provident, quae veritatis animi at, eos culpa minus ab suscipit cum laborum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias 
                    </Typography>
                </Grid>

                {/* Section 2: Quick Links */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Quick Links
                    </Typography>
                    <Link href="/" color="inherit" underline="hover">
                        Home
                    </Link>
                    <br />
                    <Link href="/about" color="inherit" underline="hover">
                        About
                    </Link>
                    <br />
                    <Link href="/services" color="inherit" underline="hover">
                        Services
                    </Link>
                    <br />
                    <Link href="/contact" color="inherit" underline="hover">
                        Contact
                    </Link>
                </Grid>

                {/* Section 3: Follow Us */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Follow Us
                    </Typography>
                    <Box>
                        <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook" color="inherit">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="https://www.twitter.com" target="_blank" aria-label="Twitter" color="inherit">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" color="inherit">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram" color="inherit">
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Section 4: Copyright */}
            <Box mt={4} textAlign="center">
                <Typography variant="body2">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
