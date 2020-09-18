import React, { Fragment } from 'react';
import './Categories.css';
import useFetch from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';
//Material component
import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
//ApiUrl
import ApiUrl from '../../services/ApiUrl';

const Categories = () => {
  const history = useHistory()
  const { data } = useFetch(`${ApiUrl}/v2/categories`)

  const handleOnClick = (id) => {
    history.push(`/catalogo/${id}`);
  }

  return (
    <Fragment>
      <Grid container item xs={12} className="categories-container">
        <img src="https://api.tissini.app/img/categories/product-lines.png" alt="Linea de productos" className="img-fluid img-category" />
      {
        data.map((item, index) => {
          return(
            <Box display="flex" justifyContent="center" key={item.id} onClick={e => handleOnClick(item.id)} >
              <Grid item xs={9} className="category-grid">
                <img src={`https://api.tissini.app/${item.image}`} alt="Categorias" className="img-fluid" />
                <button type="button" className="view-more">Ver más</button>
              </Grid>
            </Box>
          )
        })
      }
      </Grid>
    </Fragment>
  )
}

export default Categories