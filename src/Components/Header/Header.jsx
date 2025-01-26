import { Person } from '@mui/icons-material';
import './Header.css';
import { IconButton } from '@mui/material';
import PropTypes from "prop-types";
import SearchBar from '../SearchBar/SearchBar';


const Header = ({ bgBlack }) => {

  return (
    <div className={`Header ${bgBlack ? "bg-black" : ""}`}>
      <div className="logo">NEXAPHOTO</div>

     <div className="search-option">
     <SearchBar/>
     </div>

      <nav className="nav">
        <a href='#'>Dashboard</a>
        <a href="#">
          <IconButton className='user'>
            <Person />
          </IconButton>
        </a>
      </nav>
    </div>
  );
};

Header.propTypes = {
  bgBlack: PropTypes.bool.isRequired
};

export default Header;
