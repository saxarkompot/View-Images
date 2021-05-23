import React, { useEffect, useState } from 'react';
import './App.css';
import TwoWindows from './components/TwoWindows/TwoWindows';
import Pagination from "./components/Pagination/Pagination";

function App() {
   const [currentPage, setCurrentPage] = useState(1);
   const [markeredPage, setMarkeredPage] = useState(false);
   const [hasMore, setHasMore] = useState(true);

   const setPage = (num) => {
      setCurrentPage(num);
      setMarkeredPage(!markeredPage);
   }   

   return (
      <div className="App">
         <TwoWindows currentPage={currentPage}/>
         <Pagination setPage={setPage} markeredPage={markeredPage}/>
      </div>
   );
}

export default App;
