import React, { Fragment } from 'react';

//Material components
import Grid from '@material-ui/core/Grid/Grid';

//App components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EmptyCart from '../../components/EmptyCart/EmptyCart';

const Carrito = () => {
  return (
    <Fragment>
      <Grid container>
        {/* Header */}
        <Grid item xs={12} >
          <Header page="Catalogo" />
        </Grid>

        <EmptyCart />

        {/* Footer */}
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Carrito;