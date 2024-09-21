import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import scroll from "../assets/scroll.png";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Parallax = ({ type }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className=" w-full h-full relative flex flex-col items-center justify-center overflow-auto bg-[#1d1d1d]"
    >
      <motion.h1
        initial={{ y: "-150%", opacity: 0 }}
        animate={
          isInView ? { y: "0%", opacity: 1 } : { y: "-150%", opacity: 0 }
        }
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-white text-6xl md:text-8xl lg:text-9xl ml-5 "
      >
        What Do We Do?
      </motion.h1>
      <motion.div className="flex">
        <motion.img
          className="w-[30px] md:w-[50px] mx-auto md:mx-0"
          variants={textVariants}
          animate="scrollButton"
          src={scroll}
          alt="Scroll Indicator"
        />
      </motion.div>
    </div>
  );
};

export default Parallax;
