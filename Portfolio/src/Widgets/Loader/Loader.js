import React from "react";
import { motion } from "framer-motion";
import '../../Assets/Scss/widgets.scss';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: "50%"
  },
  end: {
    y: "150%"
  }
};

const loadingCircleTransition = {
  duration: 0.6,
  yoyo: 4,
  ease: "easeInOut"
};

export default function ThreeDotsWave() {
  return (
    <div className='loader'>
    <motion.div
      className='loader_container'
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={{'background':'#f06449'}}
        className='loading_circle'
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={{'background':'#ff0'}}
        className='loading_circle'
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={{'background':'#00ffff'}}
        className='loading_circle'
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
    </div>
  );
}