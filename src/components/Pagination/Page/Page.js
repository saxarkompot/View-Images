import React, { useState } from 'react';
import classes from './Page.module.css';

const Page = ({ number, pageStyle, click }) => {
   const [boldNumber, setBoldNumber] = useState(pageStyle);

   return (
      <div className={pageStyle ? classes.Page : classes.BoldPage} onClick={() => click(number)}>
         {number}
      </div>
   )
};

export default Page;