import React, { Fragment } from 'react';
import { useParams } from "react-router";
//Material components
import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
//App components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';

const Catalogo = () => {
  const { id } = useParams();

  return (
    <Fragment>
    <Grid container>
      {/* Header */}
      <Grid item xs={12} >
        <Header page="Catalogo" />
      </Grid>

      <Box className="main-page">
        <Grid container item xs={12}>
          <Product id={id} />
        </Grid>
      </Box>

      {/* Footer */}
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  </Fragment>
  );
}

export default Catalogo;