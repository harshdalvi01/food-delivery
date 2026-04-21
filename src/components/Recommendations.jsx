import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Sparkles, Clock } from 'lucide-react';
import ProductCard from './ProductCard';

const Recommendations = ({
  products,
  onAddToCart,
  cartItems,
  title = "Recommended for You",
  subtitle = "Based on your shopping history",
  icon: Icon = Sparkles,
  type = "recommended"
}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const typeConfig = {
    recommended: {
      icon: Sparkles,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    trending: {
      icon: TrendingUp,
      gradient: 'from-accent-500 to-red-500',
      bgGradient: 'from-accent-50 to-red-50'
    },
    frequent: {
      icon: Clock,
      gradient: 'from-primary-500 to-emerald-500',
      bgGradient: 'from-primary-50 to-emerald-50'
    }
  };

  const config = typeConfig[type] || typeConfig.recommended;
  const IconComponent = config.icon;

  return (
    <section className="py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${config.gradient}
                        flex items-center justify-center shadow-lg`}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900">
                {title}
              </h2>
              <p className="text-neutral-500 mt-1">{subtitle}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <motion.button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg
                       flex items-center justify-center transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-neutral-600 group-hover:text-primary-600" />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg
                       flex items-center justify-center transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-primary-600" />
            </motion.button>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0 w-[200px] sm:w-[220px] snap-start"
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                cartItem={cartItems.find(item => item.id === product.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Frequently Bought Together Component
export const FrequentlyBoughtTogether = ({ products, onAddToCart, cartItems }) => {
  const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
  const totalOriginalPrice = products.reduce((acc, p) => acc + p.originalPrice, 0);

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4"
          >
            <Sparkles className="w-5 h-5 text-accent-500" />
            <span className="font-medium text-neutral-700">Smart Bundle</span>
          </motion.div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
            Frequently Bought Together
          </h2>
          <p className="text-neutral-500">Complete your shopping with these popular combos</p>
        </div>

        {/* Bundle Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-4xl shadow-xl p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Products */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {products.slice(0, 3).map((product, idx) => (
                <div key={product.id} className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative"
                  >
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden bg-neutral-100 shadow-md">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary-500 text-white
                                   rounded-full flex items-center justify-center text-xs font-bold shadow">
                      ₹{product.price}
                    </span>
                  </motion.div>
                  {idx < 2 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="text-2xl font-bold text-neutral-300"
                    >
                      +
                    </motion.span>
                  )}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-32 bg-neutral-200" />
            <div className="lg:hidden w-full h-px bg-neutral-200" />

            {/* Price & Action */}
            <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
              <div>
                <p className="text-sm text-neutral-500 mb-1">Bundle Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-neutral-900">₹{totalPrice}</span>
                  <span className="text-lg text-neutral-400 line-through">₹{totalOriginalPrice}</span>
                </div>
                <p className="text-sm text-primary-600 font-medium mt-1">
                  Save ₹{totalOriginalPrice - totalPrice} ({Math.round((1 - totalPrice/totalOriginalPrice) * 100)}% off)
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => products.forEach(p => onAddToCart(p, 1))}
                className="btn-accent w-full lg:w-auto"
              >
                Add All to Cart
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Trending Near You Component
export const TrendingNearYou = ({ products, onAddToCart, cartItems, location = "Your Area" }) => (
  <Recommendations
    products={products}
    onAddToCart={onAddToCart}
    cartItems={cartItems}
    title="Trending Near You"
    subtitle={`Popular picks in ${location}`}
    type="trending"
  />
);

export default Recommendations;
