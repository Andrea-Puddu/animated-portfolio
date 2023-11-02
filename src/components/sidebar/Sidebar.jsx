import './sidebar.scss';
import {motion} from 'framer-motion';
import {useState} from 'react';

import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';

const variants = {
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className='sidebar' variants={variants} animate={open ? 'open' : 'closed'}>
      <Links setOpen={setOpen} />
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
