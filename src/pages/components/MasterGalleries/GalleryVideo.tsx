import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import Classes from '../styles/MasterGalleries/GalleryVideo.module.scss';

const GalleryVideo = (props: any) => {
  const { title } = props;
  const authToken = localStorage.getItem('authToken');
  const params = window.location.search.split('?').join('').split('=');
  const paramObj = {
    [params[0]]: params[1],
  };
  const getGalleryUrl = () => {
    if (paramObj.show === 'gallery2' && authToken) {
      return `https://user-gallery.artefy.io/?jwt-token=${authToken}`;
    }
    if (authToken) {
      return `https://themedgalleries.s3.ap-southeast-2.amazonaws.com/index.html?jwt-token=${authToken}`;
    }
    return 'https://themedgalleries.s3.ap-southeast-2.amazonaws.com/index.html';
  };
  return (
    <Box className={Classes.galleryVideoWrapper}>
      <Container>
        <Typography component="h3" className={Classes.title}>
          {title}
        </Typography>
        <Typography component="div">
          <iframe
            id="unity-3d-view"
            src={getGalleryUrl()}
            title="Artefy Gallery"
            width="1200px"
            height="730px"
            style={{
              display: 'block',
              border: '0',
              margin: '0 auto',
            }}
          />
        </Typography>
      </Container>
      <Typography
        component="div"
        className={Classes.gradientBorder}
        style={{ marginTop: '20px' }}
      />
    </Box>
  );
};

export default GalleryVideo;
