import React from 'react';
import classes from "./ListOfImages.module.css";
import ImageContainer from "./ImageContainer/ImageContainer";

const ListOfImages = ({ getImageId, listOfImages }) => {

   return (
      <div className={classes.ListOfImages}>
         {listOfImages.map(item => (
            <ImageContainer
               key={item.id}
               id={item.id}
               path={item.cropped_picture}
               onClick={() => getImageId(item.id)}
            />
         ))}
      </div>
   );
};

export default ListOfImages;
