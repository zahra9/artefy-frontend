import React, { useEffect, useState } from 'react';
import { Typography, Container, Box, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Classes from '../styles/MasterGalleries/GalleryBanner.module.scss';
import { GalleryBannerImg } from '../../../assets';

const GalleryBanner = () => {
  const history = useHistory();
  const [isLogin] = useState<any>(localStorage.getItem('authToken'));

  return (
    <Box className={Classes.galleryBannerWrapper}>
      <Container>
        <Grid container>
          <Grid item md={5} style={{ display: 'flex', alignItems: 'center' }}>
            <Box className={Classes.leftBannerWrapper}>
              <Typography component="h3" className={Classes.bannerTitle}>
                <Typography
                  component="div"
                  className={Classes.ellipsisCircle}
                />
                {'A New Way To \n Display Your NFTs'}
                <Typography
                  component="div"
                  className={Classes.ellipsisCircleLarge}
                />
              </Typography>
              <Typography component="div" className={Classes.gradientBorder} />
              <Typography component="h3" className={Classes.bannerDescription}>
                {
                  'Imagine, Create and Share your \n dream Gallery experience with \n Everscape Galleries'
                }
              </Typography>
              <Typography component="div" className={Classes.actionWrapper}>
                <Button
                  className={Classes.purpleBtn}
                  onClick={() => {
                    history.push('/marketplace');
                  }}
                >
                  Browse NFTs
                </Button>
                <Button
                  className={Classes.grayBtn}
                  onClick={() => {
                    !isLogin
                      ? history.push('/auth#login')
                      : history.push('/dashboard');
                    window.scrollTo(0, 0);
                  }}
                >
                  Sign Up
                </Button>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={7}>
            <Typography component="div" className={Classes.rightbarImgWrapper}>
              <Typography
                component="div"
                className={Classes.rightEllipseCircle}
              />
              <img
                src={GalleryBannerImg}
                className={Classes.bannerRightImg}
                alt="GalleryBannerImg"
              />
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Typography
        component="div"
        className={Classes.gradientBorder}
        style={{ marginTop: '20px' }}
      />
    </Box>
  );
};

export default GalleryBanner;
