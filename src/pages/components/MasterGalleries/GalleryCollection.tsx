import React from 'react';
import { Typography, Container, Box, Grid } from '@material-ui/core';
import Classes from '../styles/MasterGalleries/GalleryCollection.module.scss';
import {
  BannerGalleryCollection,
  collectionGirl,
  collectionDragon,
  collectionGhoost,
} from '../../../assets';

const GalleryCollection = () => {
  return (
    <Box className={Classes.galleryCollectionWrapper}>
      <Typography component="div" className={Classes.bannerImgWrapper}>
        <img
          src={BannerGalleryCollection}
          className={Classes.bannerImg}
          alt="BannerGalleryCollection"
        />
        <Container>
          <Typography component="h3" className={Classes.bannerDescription}>
            {
              'Collect And Display Licensed Digital Artwork From \n The Masters of Fantasy, Sci-Fi And Horror'
            }
          </Typography>
        </Container>
      </Typography>
      <Typography component="div" className={Classes.galleyCollections}>
        <Container>
          <Grid container spacing={3} className={Classes.galleryImgsWrapper}>
            <Grid item md={4}>
              <img
                src={collectionDragon}
                alt="collectionDragon"
                className={Classes.collectionImg}
              />
            </Grid>
            <Grid item md={4}>
              <img
                src={collectionGirl}
                alt="collectionGirl"
                className={Classes.collectionImg}
              />
            </Grid>
            <Grid item md={4}>
              <img
                src={collectionGhoost}
                alt="collectionGhoost"
                className={Classes.collectionImg}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Box className={Classes.collectionInfoItem}>
                <Typography
                  component="div"
                  style={{ display: 'flex', gap: '40px', alignItems: 'center' }}
                >
                  <Typography component="h3" className={Classes.count}>
                    1
                  </Typography>
                  <Typography component="h3" className={Classes.title}>
                    {'Build Your \n Collection'}
                  </Typography>
                </Typography>
                <Typography
                  className={Classes.gradientBorder}
                  component="div"
                  style={{ marginTop: '25px' }}
                />
                <Typography component="p" className={Classes.description}>
                  {
                    'Browse our \n marketplace and \n limited releases for \n exclusive drops to \n curate your unique \n collection'
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className={Classes.collectionInfoItem}>
                <Typography
                  component="div"
                  style={{ display: 'flex', gap: '40px', alignItems: 'center' }}
                >
                  <Typography component="h3" className={Classes.count}>
                    2
                  </Typography>
                  <Typography component="h3" className={Classes.title}>
                    {'Create Your \n Gallery'}
                  </Typography>
                </Typography>
                <Typography
                  className={Classes.gradientBorder}
                  component="div"
                  style={{ marginTop: '25px' }}
                />
                <Typography component="p" className={Classes.description}>
                  {
                    'Utilize our proprietary \n gallery builder to \n create themed \n galleries to show off \n your  collection'
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className={Classes.collectionInfoItem}>
                <Typography
                  component="div"
                  style={{ display: 'flex', gap: '40px', alignItems: 'center' }}
                >
                  <Typography component="h3" className={Classes.count}>
                    3
                  </Typography>
                  <Typography component="h3" className={Classes.title}>
                    {'Share Your \n Vision'}
                  </Typography>
                </Typography>
                <Typography
                  className={Classes.gradientBorder}
                  component="div"
                  style={{ marginTop: '25px' }}
                />
                <Typography component="p" className={Classes.description}>
                  {
                    'Engage with the \n community, get \n feedback and refine \n your vision until you’re \n ready to share it with \n the world'
                  }
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Typography>
      <Typography component="div" className={Classes.gradientBorder} />
    </Box>
  );
};

export default GalleryCollection;
