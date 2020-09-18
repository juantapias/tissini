import React, { Fragment } from 'react';
import './EmptyCart.css';
import EmptyCartImg from '../../assets/Image/empty-cart.png'

//Material components
import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';


const EmptyCart = () => {
  return (
    <Fragment>
      <Box display="flex" className="empty-container">
        <Grid container item xs={12} justify="center">
          <img src={EmptyCartImg} className="img-fluid" />
          <Typography align="center" className="empty-typography">
            Carrito Vacío, Vamos de Compras!
          </Typography>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default EmptyCart