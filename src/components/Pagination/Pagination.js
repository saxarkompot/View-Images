import React, { useEffect, useState } from 'react';
import Page from "./Page/Page";
import classes from './Pagination.module.css';

const Pagination = ({ setPage, markeredPage }) => {
   const [numberOfPages, setNumberOfPages] = useState([
      { number: 1, bold: false },
      { number: 2, bold: false },
      { number: 3, bold: false }
   ]);
   const [currentPage, setCurrentPage] = useState(false);

   const changePage = (event) => {
      const minNumOfPages = 1;
      const maxNumOfPages = 26;
      if (event) {
         setCurrentPage(true);
      }
   }

   const changePageStyle = (number) => {
      const newPages = [ ...numberOfPages ];
      newPages.map(num => num.number === number ? null : num.bold = !num.bold);
      setNumberOfPages(newPages);
      console.log(numberOfPages);
   }

   return (
      <div className={classes.Pagination}>
         {numberOfPages.map(page =>
            <Page
               key={page.number}
               number={page.number}
               setPage={setPage}
               pageStyle={page.bold}
               click={changePageStyle}
            />)}
      </div>
   )
};

export default Pagination;
