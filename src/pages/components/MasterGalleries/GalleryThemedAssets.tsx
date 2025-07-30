import React from 'react';
import { Typography, Container, Box, Grid } from '@material-ui/core';
import Classes from '../styles/MasterGalleries/GalleryThemedAssets.module.scss';
import { galleryAsset } from '../../../assets';

const GalleryThemedAssets = () => {
  return (
    <Box className={Classes.galleryThemedAssetsWrapper}>
      <Container>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Box className={Classes.leftItem}>
              <Typography className={Classes.circleEllipsisSmall} />
              <img
                src={galleryAsset}
                className={Classes.galleryAssetImg}
                alt="galleryAsset"
              />
              <Typography className={Classes.circleEllipsisLarge} />
            </Box>
          </Grid>
          <Grid item md={6} style={{ display: 'flex', alignItems: 'center' }}>
            <Box className={Classes.rightItem}>
              <Typography component="h3" className={Classes.titleWhite}>
                A Growing Library Of
              </Typography>
              <Typography component="h3" className={Classes.titlePurple}>
                Themed Assets
              </Typography>
              <Typography className={Classes.description}>
                We believe great art should have a great gallery to match.
                That’s why we have curated and built hundreds of assets in the
                themes of Fantasy, Sci-Fi and Horror to accompany your favourite
                pieces
              </Typography>
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

export default GalleryThemedAssets;
