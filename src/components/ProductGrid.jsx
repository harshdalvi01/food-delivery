import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({
  products,
  onAddToCart,
  cartItems,
  title = "Best Sellers",
  subtitle = "Most popular products this week",
  onWishlist,
  wishlist = []
}) => {
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortOptions = [
    { value: 'popular', label: 'Most Popular', icon: '🔥' },
    { value: 'price-low', label: 'Price: Low to High', icon: '💰' },
    { value: 'price-high', label: 'Price: High to Low', icon: '💎' },
    { value: 'rating', label: 'Highest Rated', icon: '⭐' },
    { value: 'discount', label: 'Best Discount', icon: '🏷️' },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return b.discount - a.discount;
      default:
        return b.reviews - a.reviews;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-neutral-50 to-white relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl
                       flex items-center justify-center shadow-lg shadow-accent-500/30"
              whileHover={{ rotate: [0, -10, 10, 0] }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900">
                {title}
              </h2>
              <p className="text-neutral-500 mt-1">{subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-neutral-200
                         rounded-2xl hover:border-primary-300 transition-all shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Filter className="w-4 h-4 text-neutral-500" />
                <span className="text-sm font-semibold text-neutral-700">
                  {sortOptions.find(opt => opt.value === sortBy)?.label}
                </span>
                <motion.div
                  animate={{ rotate: showFilters ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl
                             border border-neutral-100 overflow-hidden z-20"
                  >
                    <div className="p-2">
                      {sortOptions.map((option) => (
                        <motion.button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setShowFilters(false);
                          }}
                          className={`w-full px-4 py-3 text-left rounded-xl transition-all flex items-center gap-3
                            ${sortBy === option.value
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-neutral-700 hover:bg-neutral-50'
                            }`}
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-lg">{option.icon}</span>
                          <span className="font-medium">{option.label}</span>
                          {sortBy === option.value && (
                            <motion.div
                              layoutId="sort-indicator"
                              className="ml-auto w-2 h-2 bg-primary-500 rounded-full"
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* View All Button */}
            <motion.button
              className="hidden sm:flex items-center gap-2 text-primary-600 font-semibold
                       hover:text-primary-700 transition-colors group px-4 py-2"
              whileHover={{ x: 4 }}
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                cartItem={cartItems.find(item => item.id === product.id)}
                onWishlist={onWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {products.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              className="px-10 py-4 bg-white border-2 border-neutral-200 rounded-2xl
                       font-semibold text-neutral-700 hover:border-primary-300
                       hover:bg-primary-50 hover:text-primary-700 transition-all duration-300
                       shadow-sm hover:shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Load More Products
              <span className="text-neutral-400">({products.length}+)</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
