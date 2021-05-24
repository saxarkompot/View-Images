import React, { useState, useEffect } from 'react';
import ListOfImages from '../ListOfImages/ListOfImajes';
import FullImage from '../FullImage/FullImage';
import classes from './TwoWindows.module.css';
import UserProvider from '../UserProvider';

const TwoWindows = ({ currentPage, getNumberOfPages }) => {

   const [listOfImages, setListOfImages] = useState([]);
   const [imageId, setImageId] = useState('');
   const [imageUrl, setImageUrl] = useState('');

   useEffect(() => {
      new UserProvider().getListOfImages(currentPage).then((response) => {
         setListOfImages(response.data.pictures);
         getNumberOfPages(response.data.pageCount);
         console.log(response);
      })
   }, [currentPage, getNumberOfPages]);

   useEffect(() => {
      new UserProvider().getFullImage(imageId).then((response) => {
         console.log(response.data);
         console.log(response.data.full_picture);
         setImageUrl(response.data.full_picture);
      })
   }, [imageId]);

   const getImageId = (data) => {
      setImageId(data);
      console.log(imageId);
   }

   return (
      <div className={classes.TwoWindows}>
         <ListOfImages getImageId={getImageId} listOfImages={listOfImages} />
         <FullImage imageUrl={imageUrl} />
      </div>
   )
}

export default TwoWindows;
