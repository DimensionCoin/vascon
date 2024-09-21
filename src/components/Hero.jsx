import { motion } from "framer-motion";
import hero from "../assets/hero.png";
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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    console.log(`Scrolling to ${id}`);
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Element with ID ${id} not found`);
  }
};

const Hero = () => {
  return (
    <div className="relative px-3 md:mt-5 h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-b from-[#373737] to-[#1d1d1d]">
      <div className="relative m-auto h-full max-w-[1366px] flex flex-col justify-center items-center md:flex-row z-10">
        <motion.div
          className="flex flex-col justify-center h-full gap-8 md:gap-10 w-3/4 md:w-1/2 text-center md:text-left z-20"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-4xl md:text-[30px] text-[#c5c5c5] tracking-[2vw] md:tracking-[10px]"
            variants={textVariants}
          >
            Vassallo Construction
          </motion.h2>
          <motion.h1
            className="text-lg md:text-[88px] leading-tight"
            variants={textVariants}
          >
            The Best Handyman in the GTA
          </motion.h1>
          <motion.div
            className="flex gap-3 md:gap-5 justify-center md:justify-start z-30"
            variants={textVariants}
          >
            <motion.button
              onClick={() => scrollToSection("Services")}
              className="p-3 md:p-5 border border-white rounded-[10px] bg-transparent text-white font-light cursor-pointer"
              variants={textVariants}
            >
              Our Gallery
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("Contact")}
              className="p-3 md:p-5 border border-white rounded-[10px] bg-transparent text-white font-light cursor-pointer"
              variants={textVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        <div className="hidden md:block w-1/2 z-10">
          <img className="object-cover w-full h-full" src={hero} alt="hero" />
        </div>
      </div>
      <motion.div
        className="absolute bottom-[-20px] md:bottom-[-120px] text-[20vw] md:text-[50vh] whitespace-nowrap text-[#ffffff09] w-full md:w-1/2 font-bold z-0"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Framing Decks Fences Interior Exterior
      </motion.div>
    </div>
  );
};

export default Hero;
