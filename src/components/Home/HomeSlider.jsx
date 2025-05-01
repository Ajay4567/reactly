import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import homeService from '../../services/homeService';

// Animation variants for Framer Motion
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

const HomeSlider = () => {
  const [sliders, setSliders] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to advance to the next slide
  const nextSlide = () => {
    if (sliders.length > 0) {
      setDirection(1);
      setIndex((prev) => {
        const newIndex = (prev + 1) % sliders.length;
        console.log('New index:', newIndex, 'Sliders length:', sliders.length);
        return newIndex;
      });
    } else {
      console.log('Cannot advance slide: sliders is empty');
    }
  };


  //const nextSlide = () => setIndex(([prev]) => [(prev + 1) % sliders.length, 1]);

  const prevSlide = () =>
    setIndex(([prev]) => [(prev - 1 + sliders.length) % sliders.length, -1]);


  // Fetch sliders and handle auto-rotation
  useEffect(() => {
    let isMounted = true;

    // Fetch sliders from API
    const fetchSliders = async () => {
      setLoading(true);
      try {
        console.log('Fetching sliders from /api/sliders...');
        const slidersData = await homeService.getSliders();
        console.log('Raw API response:', slidersData);

        // Ensure slidersData is an array and contains valid objects
        let slidersArray = Array.isArray(slidersData) ? slidersData : slidersData.data || [];
        slidersArray = slidersArray.filter(
          (slide) => slide && typeof slide === 'object' && slide.id && slide.imageUrl
        );

        console.log('Filtered sliders array:', slidersArray);

        if (isMounted) {
          if (slidersArray.length === 0) {
            console.warn('Sliders array is empty or contains invalid data');
            setError('No valid sliders available from API');
            setSliders([]);
          } else {
            console.log('Setting sliders state:', slidersArray);
            setSliders(slidersArray);
          }
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching sliders:', err);
        if (isMounted) {
          setError(err.message || 'Failed to fetch sliders');
          setSliders([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSliders();

    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array for initial fetch

  // Separate useEffect for auto-rotation to depend on sliders
  useEffect(() => {
    if (sliders.length === 0) {
      console.log('No sliders to rotate');
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => {
      console.log('Clearing interval');
      clearInterval(interval);
    };
  }, [sliders]); // Depend on sliders to start interval after sliders are set

  // Log sliders and index for debugging
  console.log('Current sliders state:', sliders);
  console.log('Current index:', index);

  return (
    <>
      {/* Slider Section */}
      <section>
        {loading && <p>Loading sliders...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {sliders.length > 0 && sliders[index] ? (
          <div className="relative w-full h-[420px] overflow-hidden">
            <AnimatePresence custom={direction} initial={true} mode="wait">
              <motion.img
                key={sliders[index].id}
                src={sliders[index].imageUrl}
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
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-white px-2 py-1 rounded-full w-10 h-10 flex justify-center items-center"
            >
              <svg
                className="w-4 h-4 rotate-90"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                color="#ffffff"
              >
                <path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-white px-2 py-1 rounded-full w-10 h-10 flex justify-center items-center"
            >
              <svg
                className="w-4 h-4 -rotate-90"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                color="#ffffff"
              >
                <path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z" />
              </svg>
            </button>
          </div>
        ) : (
          !loading && <p>No sliders available</p>
        )}
      </section>
    </>
  );
};

export default HomeSlider;