import React, { useEffect, useState } from 'react';
import Page from "./Page/Page";
import classes from './Pagination.module.css';

const Pagination = ({ setPage, numberOfPages }) => {

   const getListOfPages = () => {
      const arrayOfNumbers = [];
      for (let i = 1; i <= numberOfPages; i++) {
         arrayOfNumbers.push(i)
      }
      return arrayOfNumbers;
   }

   return (
      <div className={classes.Pagination}>
         {getListOfPages().map(num =>
            <Page
               key={num}
               number={num}
               setPage={setPage}
            />)}
      </div>
   )
};

export default Pagination;
