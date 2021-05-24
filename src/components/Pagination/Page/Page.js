import React, { useState } from 'react';
import classes from './Page.module.css';

const Page = ({ number, setPage }) => {

   return (
      <div className={classes.Page} onClick={() => setPage(number)}>
         {number}
      </div>
   )
};

export default Page;