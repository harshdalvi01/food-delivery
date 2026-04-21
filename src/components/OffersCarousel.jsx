import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Copy, Check, Zap, Clock } from 'lucide-react';
import { offers } from '../data/sampleData';

const OffersCarousel = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const currentScroll = carouselRef.current.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-neutral-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-12 h-12 bg-gradient-to-br from-accent-400 to-red-500 rounded-2xl
                       flex items-center justify-center shadow-lg shadow-accent-500/30"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900">
                Today's Best Offers
              </h2>
              <p className="text-neutral-500 mt-1 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Grab these deals before they expire!
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <motion.button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-xl bg-white shadow-md hover:shadow-lg
                       flex items-center justify-center transition-all group border border-neutral-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-neutral-600 group-hover:text-primary-600" />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-xl bg-white shadow-md hover:shadow-lg
                       flex items-center justify-center transition-all group border border-neutral-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-primary-600" />
            </motion.button>
          </div>
        </motion.div>

        {/* Offers Carousel */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`flex-shrink-0 w-[320px] sm:w-[360px] h-[200px] rounded-3xl
                        bg-gradient-to-br ${offer.bgGradient}
                        relative overflow-hidden cursor-pointer snap-start
                        shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -right-16 -top-16 w-48 h-48 rounded-full border-4 border-white"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full border-4 border-white"
                />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between z-10">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">{offer.description}</p>
                  <h3 className="text-white text-2xl font-bold mb-1">{offer.title}</h3>
                  <motion.p
                    className="text-white text-3xl font-extrabold"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {offer.subtitle}
                  </motion.p>
                </div>

                {/* Promo Code */}
                <div className="flex items-center gap-3">
                  <motion.div
                    className="bg-white/25 backdrop-blur-md rounded-xl px-4 py-2.5 flex items-center gap-3
                             border border-white/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-white font-mono font-bold tracking-wider">
                      {offer.code}
                    </span>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyCode(offer.code);
                      }}
                      className="text-white/80 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <AnimatePresence mode="wait">
                        {copiedCode === offer.code ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-5 h-5 text-green-300" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Copy className="w-5 h-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.div>
                  <AnimatePresence>
                    {copiedCode === offer.code && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="text-white text-sm font-semibold"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Offer Image */}
              <motion.div
                className="absolute right-0 bottom-0 w-36 h-36 opacity-90"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover rounded-tl-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/10 rounded-tl-3xl" />
              </motion.div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: idx * 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Progress Dots - Mobile */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {offers.map((_, idx) => (
            <motion.div
              key={idx}
              className="w-2 h-2 rounded-full bg-neutral-300"
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersCarousel;
