import './navbar.scss';
import {motion, spring} from 'framer-motion';

import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <div className='social'>
          <a href='#'>
            <img src='/twitter.svg' alt='Twitter'></img>
          </a>
          <a href='#'>
            <img src='/linkedin.svg' alt='Linkedin'></img>
          </a>
          <a href='#'>
            {' '}
            <img src='/github.svg' alt='Github'></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
