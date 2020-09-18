import React, { Fragment } from 'react';
import './Product.css';
import useFetch from '../../hooks/useFetch';
//Material components
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import Typorgraphy from '@material-ui/core/Typography/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Card from '@material-ui/core/Card/Card'
//Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
//ApiUrl
import ApiUrl from '../../services/ApiUrl';

SwiperCore.use([Navigation, Pagination]);

const swiperClass = {
  container: {
    height: '414px',
    width: '450px'
  },
  slides: {
    listStyle: 'none',
    width: '450px !important'
  }
}

const Product = ({id}) => {

  const { data, loading } = useFetch(`${ApiUrl}/v2/categories/${id}/products`);

  if (loading)
    return <h1>Loading...</h1>

  return (
    <Fragment>
      {
        data.products.map( (product) => {
          return(
            <Grid container item xs={12} key={product.id} className="container-product">
              <Card>
                <Swiper
                  tag="section"
                  wrapperTag="ul"
                  style={swiperClass.container}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={0}
                  slidesPerView={1}
                >
                  {
                    product.images.map((image) => {
                      return (
                        <SwiperSlide key={image.id} tag="li" style={swiperClass.slides}>
                          <img src={`https://api.tissini.app/${image.url}`} className="img-fluid" alt="product image" />
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
                <Grid item xs={12} className="caption-product">
                  <button className="btn-add-cart"><AddShoppingCartIcon /> Agregar</button>
                  <Typorgraphy className="price-product">
                    {product.price}
                  </Typorgraphy>
                </Grid>
              </Card>
            </Grid>
          )
        })
      }
    </Fragment>
  );
}

export default Product;