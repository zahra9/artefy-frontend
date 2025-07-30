import React from 'react';
import { Typography, Container, Box, Grid } from '@material-ui/core';
import Classes from '../styles/MasterGalleries/GalleryParalle.module.scss';
import { galleryFrame } from '../../../assets';

const GalleryParalle = () => {
  return (
    <Box className={Classes.galleryParalleWrapper}>
      <Container>
        <Grid container spacing={6}>
          <Grid item md={6} style={{ display: 'flex', alignItems: 'center' }}>
            <Box className={Classes.leftItem}>
              <Typography component="h3" className={Classes.titleWhite}>
                Unparalleled Gallery
              </Typography>
              <Typography component="h3" className={Classes.titlePurple}>
                Customization
              </Typography>
              <Typography className={Classes.description}>
                It is not enough to have a fixed template to display your
                collection in. We are building a system that allows you to
                become a creator and design your own unique gallery experience,
                exactly as you envision it.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className={Classes.rightItem}>
              <Typography component="div" className={Classes.leftCircleSmall} />
              <Typography
                component="div"
                className={Classes.rightCircleSmall}
              />
              <img
                src={galleryFrame}
                className={Classes.rightItemImg}
                alt="galleryFrames"
              />
              <Typography component="div" className={Classes.leftCircleLarge} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography
        className={Classes.gradientBorder}
        style={{ marginTop: '20px' }}
      />
    </Box>
  );
};

export default GalleryParalle;
