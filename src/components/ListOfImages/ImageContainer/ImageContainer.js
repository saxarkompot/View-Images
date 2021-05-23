import React from 'react';
import classes from "./ImageContainer.module.css";

const ImageContainer = ({ path, onClick }) => {
   return (
      <div className={classes.ImageContainer}>
         <img src={path} alt='' onClick={onClick} />
      </div>
   )
}

export default ImageContainer;