
import { forwardRef } from 'react';
import './Helper.css';
import Footer from "../Footer/Footer.jsx";
import SearchResult from '../SearchResult/SearchResult';
import SearchBar from '../SearchBar/SearchBar';

const Helper = forwardRef((props, ref) => {
  return (
    <div ref={ref}  className="Helper">
        <div className="barsearch">
        <SearchBar/>
        </div>
        <SearchResult/>
        <Footer/>
    </div>
  );
});

export default Helper;