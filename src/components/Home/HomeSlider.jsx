import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, image: "/images/cat.jpg" },
  { id: 2, image: "/images/dog.jpg" },
  { id: 3, image: "/images/hero-banner.jpg" },
];

function HomeSlider() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const nextSlide = () => setIndex(([prev]) => [(prev + 1) % slides.length, 1]);

  const prevSlide = () =>
    setIndex(([prev]) => [(prev - 1 + slides.length) % slides.length, -1]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  const variants = {
    enter: (dir) => ({
      opacity: 0.5,
    }),
    center: {
      opacity: 1,
    },
    exit: (dir) => ({
      opacity: 0.5,
    }),
  };
  return (
    <div className="relative w-full h-[420px] overflow-hidden">
      <AnimatePresence custom={direction} initial={true} mode="wait">
        <motion.img
          key={slides[index].id}
          src={slides[index].image}
          className="absolute w-full h-full object-cover"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1 },
          }}
        />
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
      >
        ⬅
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
      >
        ➡
      </button>
    </div>
  );
}

export default HomeSlider;
