import React, { useState, useEffect } from 'react';

import getInstagramData from '../../api-helper/api-caller';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import '../instagram-picture-only/picture-only.styles.scss';


export default function PictureOnly() {
  const [igData, setIgData] = useState(null)

  
  useEffect(() => {
    let dataCollection = async() => {
      let res = await getInstagramData();
      setIgData(res)
    } 
    dataCollection();
  }, []);
//Here I map through the IG data and create individual items to be displayed
  const IgPosts = () => {
    return (igData.map((x) => (
      <ImageListItem key={x.media_url}>
      <a target="_blank" rel="noopener noreferrer" href={
        `${x.permalink}`
      }>
      <img className='instagram-image' src={`${x.media_url}`} alt='instagram post' loading="lazy" />
      </a>
</ImageListItem>
 
  )
  ))
  }
  return (
    <div className='instagram-section'>
    <h1 className='header'>MY INSTAGRAM</h1>
      <ImageList
      cols={3}
      rowHeight={150}
      >
        {igData !== null && IgPosts()}
      </ImageList>
     

    </div>
  )
}
