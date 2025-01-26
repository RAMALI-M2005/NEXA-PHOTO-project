
import { IconButton } from '@mui/material';
import './Footer.css';
import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="Footer">
        <div className="logo">NEXAPHOTO</div>

        <p>&copy; 2025 NEXAPHOTO. All rights reserved.</p>


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
  );
};

export default Footer;