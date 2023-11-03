import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import cards from './cards.json';

//json of title description and image, which we will loop through

const cardCode = cards.map((card) => {
  return (
    <Flexing title={card[1]} description={card[2]} image={card[3]} />
  )
});

function Flexing(props) {
  return (

    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignSelf: 'center', margin: '10px' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '70%',
        }}
        image={props.image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography>
          {props.description}
        </Typography>
      </CardContent>
    </Card>

  )
}


function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        The Crits
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img height="50px" width="50px" src="https://media.licdn.com/dms/image/D4D0BAQFcZJtNYioWfw/company-logo_100_100/0/1689844970557?e=1707350400&v=beta&t=YMbHbdMOgTmNRvPs4E3GFbiAthHEH18evcMOz1YpWEA" alt="" />
          <Typography variant="h6" color="inherit" noWrap sx={
            { marginLeft: "10px" }
          } >
            The Crits
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              The Crits
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              False Assumptions, We Break !
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href='mailto:thecritswastaken@gmail.com?subject=Contact' variant="contained">Contact</Button>
            </Stack>
          </Container>
        </Box>
        <Container>
          {/* End hero unit */}
          <Grid container>

            {cardCode}

          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#1976d2', p: 6, mt: 5 }} component="footer">

        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}