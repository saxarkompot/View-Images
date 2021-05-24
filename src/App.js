import React, { useState } from 'react';
import './App.css';
import TwoWindows from './components/TwoWindows/TwoWindows';
import Pagination from "./components/Pagination/Pagination";

function App() {
   const [currentPage, setCurrentPage] = useState(1);
   const [numberOfPages, setNumberOfPages] = useState([]);

   const setPage = (num) => {
      setCurrentPage(num);
   }

   const getNumberOfPages = (num) => {
      setNumberOfPages(num);
      console.log(numberOfPages);
   }

   return (
      <div className="App">
         <TwoWindows currentPage={currentPage} getNumberOfPages={getNumberOfPages} />
         <Pagination setPage={setPage} numberOfPages={numberOfPages} />
      </div>
   );
}

export default App;
