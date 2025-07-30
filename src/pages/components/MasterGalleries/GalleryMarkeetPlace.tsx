import React from 'react';
import { Typography, Container, Box, Grid } from '@material-ui/core';
import Classes from '../styles/MasterGalleries/GalleryMarkeetPlace.module.scss';
import { galleryMarkeetPlace, galleryPage } from '../../../assets';

const GalleryMarkeetPlace = () => {
  return (
    <Box className={Classes.GalleryMarkeetPlaceWrapper}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box className={Classes.leftSideWrapper}>
              <img
                src={galleryPage}
                alt="galleryPage"
                className={Classes.galleryPageImg}
              />
            </Box>
          </Grid>
          <Grid item md={6} style={{ display: 'flex', alignItems: 'center' }}>
            <Box className={Classes.rightSideWrapper}>
              <Typography component="div" className={Classes.title}>
                Community-Driven
              </Typography>
              <Typography component="div">
                <img
                  src={galleryMarkeetPlace}
                  className={Classes.markeetPlaceImg}
                  alt="galleryMarkeetPlace"
                />
              </Typography>
              <Typography component="p" className={Classes.description}>
                Want something a little different to show off your collection,
                but don’t want to build it yourself? Try one of the Community
                built gallery templates, or commission someone to make something
                just for you. The possibilites are endless.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography
        className={Classes.gradientBorder}
        style={{ marginTop: '30px' }}
      />
    </Box>
  );
};

export default GalleryMarkeetPlace;
