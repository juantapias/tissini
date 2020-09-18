import React, { Fragment } from 'react';
//Material components
import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
//App components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sections from '../../components/Sections/Sections';
import Categories from '../../components/Categories/Categories';

const Categorias = () => {

  return(
    <Fragment>
      <Grid container>
        {/* Header */}
        <Grid item xs={12} >
          <Header page="Catalogo" />
        </Grid>
        <Box className="main-page">
          {/* Sections */}
          <Grid item xs={12}>
            <Sections />
          </Grid>

          {/* Categories */}
          <Grid item xs={12}>
            <Categories />
          </Grid>
        </Box>
        {/* Footer */}
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Categorias;