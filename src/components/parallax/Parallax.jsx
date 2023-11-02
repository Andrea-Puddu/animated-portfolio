import './parallax.scss';
import {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

const Parallax = ({type}) => {
  // Reference to the parallax section
  const ref = useRef();

  // Track the scroll progress
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Create animations to change y/x values based on scroll progress
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className='parallax'
      ref={ref}
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{y: yText}}>{type === 'services' ? 'What I Do?' : 'What I Did?'}</motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div
        className='planets'
        style={{
          y: yBg,
          backgroundImage: `url(${type === 'services' ? '/planets.png' : '/sun.png'})`,
        }}
      ></motion.div>
      <motion.div style={{x: yBg}} className='stars'></motion.div>
    </div>
  );
};

export default Parallax;
