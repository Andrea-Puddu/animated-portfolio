import {motion, spring} from 'framer-motion';
import {useState} from 'react';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    visible: {opacity: 1, x: 200, transition: {type: 'spring', stiffness: 200}},
    hidden: {opacity: 0, transition: {type: 'spring'}},
  };

  return (
    <div className='course'>
      <button onClick={() => setIsOpen((prev) => !prev)}>CLICK ME</button>

      <motion.div
        variants={variants}
        // initial='hidden'
        // animate='visible'
        // whileInView={{scale: 2}}
        // transition={{duration: 1}}
        // drag

        animate={isOpen ? 'visible' : 'hidden'}
        className='box'
      ></motion.div>
    </div>
  );
};

export default Test;
