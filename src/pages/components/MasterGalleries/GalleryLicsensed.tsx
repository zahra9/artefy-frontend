import React from 'react';
import { Typography, Container, Box, Grid } from '@material-ui/core';
import Classes from '../styles/MasterGalleries/GalleryLicsensed.module.scss';
import { galleryLicensed } from '../../../assets';

const GalleryLicsensed = () => {
  return (
    <Box className={Classes.licsensedWrapper}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Box className={Classes.leftSideItem}>
              <Typography component="h3" className={Classes.titleWhite}>
                Licensed NFT Art From
              </Typography>
              <Typography component="h3" className={Classes.titlePurple}>
                The Masters
              </Typography>
              <Typography component="p" className={Classes.description}>
                When we talk about great art, we mean it. We have partnered with
                so many of the best traditional and digital artists in the world
                that it’s almost hard to fit them all. We take traditional and
                digital works recognized the world over and turn them into
                animated NFTs. Our approach is not derivative, it is
                transformative. And best of all? We work directly with the
                artists and their estates. Just take a look at some of our
                previous drops.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              src={galleryLicensed}
              className={Classes.galleryLicensedImg}
              alt="galleryLicensed"
            />
          </Grid>
        </Grid>
      </Container>
      <Typography
        component="div"
        className={Classes.gradientBorder}
        style={{ marginTop: '100px' }}
      />
    </Box>
  );
};

export default GalleryLicsensed;
