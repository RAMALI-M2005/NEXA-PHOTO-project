
import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material';
import SearchBar from '../SearchBar/SearchBar';
import './Main.css';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="Main">
        
        <h1>Photo Search Engine: Discover Stunning Images</h1>
        <p>Explore our vast collection of beautiful photos from all around the world. Enjoy high-quality images and a user-friendly experience.</p>
        <SearchBar/>

        <div className="secondBTNs">
          <div className="btn-box">
          <button>LOGIN</button>
          <button onClick={()=>navigate("/search")}>GET START</button>
          </div>
          <div className="soicial-media-icons">
            <IconButton className='ico'>
            <Facebook/>
            </IconButton>
            <IconButton className='ico'>
            <Instagram/>
            </IconButton>
            <IconButton className='ico'>
            <Twitter/>
            </IconButton>
            <IconButton className='ico'>
            <GitHub/>
            </IconButton>
          </div>

        </div>

    </div>
  );
};

export default Main;