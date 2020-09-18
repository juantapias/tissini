import React, { Fragment } from 'react';
import './Section.css';
import useFetch from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';
//Material components
import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
//Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
//ApiUrl
import ApiUrl from '../../services/ApiUrl';

SwiperCore.use([Navigation, Pagination]);

const SwiperClass = {
  slides: {
    height: '47%',
    listStyle: 'none',
    width: '176px'
  }
}

const Sections = () => {
  const history = useHistory();
  const { data, loading } = useFetch(`${ApiUrl}/v1/categories/sections`)

  const handleOnClick = (id) => {
    history.push(`/catalogo/${id}`);
  }

  if (loading)
    return <h1>Loading...</h1>

  return (
    <Fragment>
      {
        data.map((item, index) => {
          return(
            <Box display="flex" justifyContent="center" key={index}>
              <Grid item xs={12}>
                <img src={`https://api.tissini.app/${item.image}`} className="img-fluid" />
                <Swiper
                  tag="section"
                  className="swiper-sections"
                  wrapperTag="ul"
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={5}
                  slidesPerColumn={2}
                  slidesPerView={2}
                >
                {
                  item.products.map( (item, index) => {
                    let category_id = Object.values(item)[1];
                    let url = Object.values(item.image)[2];
                    let category = Object.values(item.categories)[3]
                    return(
                      <SwiperSlide key={index} tag="li" style={SwiperClass.slides} onClick={() => handleOnClick(category_id)}>
                        <img src={`https://api.tissini.app/${url}`} className="img-fluid product-img" />
                        <Box className="product-caption">
                          <Typography component="p" variant="p" className="product-name">
                            {item.name}
                          </Typography>
                          <Typography component="p" variant="p" className="product-category">
                            {category}
                          </Typography>
                          <Typography component="p" variant="p" className="product-price">
                            {item.price}
                          </Typography>
                        </Box>
                      </SwiperSlide>
                    )
                  })
                }
                </Swiper>
              </Grid>
            </Box>

          )
        })
      }
    </Fragment>
  );
}

export default Sections;