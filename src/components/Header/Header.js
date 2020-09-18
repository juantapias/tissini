import React, { Fragment } from 'react';
import './Header.css';

//Material components
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import CallIcon from '@material-ui/icons/Call';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = ({page}) => {
  return(
    <Fragment>
      <Container className="header-container">
      <Grid container>
        <Grid item xs={8} className="header-page">
          <Typography className="header-title">
            {page}
          </Typography>
        </Grid>
        <Grid item xs={4} className="header-icon">
          <IconButton aria-label="Llamar">
            <CallIcon className="item-icon" />
          </IconButton>
          <IconButton aria-label="Cerrar sesion">
            <ExitToAppIcon className="item-icon" />
          </IconButton>
        </Grid>
      </Grid>
      </Container>
    </Fragment>
  )
};

export default Header;