import React from 'react';
import classes from "./FullImage.module.css";

const description = 'click on the photo on the left to see the picture';

const FullImage = ({ imageUrl }) => {

   return (
      <div className={classes.FullImage}>
         {imageUrl ? <img src={imageUrl} alt='' /> : description}
      </div>
   )
};

export default FullImage;