import { motion } from 'framer-motion';

// Product Card Skeleton
export const ProductCardSkeleton = () => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-card">
    <div className="relative aspect-square skeleton-shimmer" />
    <div className="p-4 space-y-3">
      <div className="h-4 skeleton-shimmer rounded-lg w-3/4" />
      <div className="h-3 skeleton-shimmer rounded-lg w-1/2" />
      <div className="flex items-center justify-between pt-2">
        <div className="h-5 skeleton-shimmer rounded-lg w-16" />
        <div className="h-8 skeleton-shimmer rounded-xl w-20" />
      </div>
    </div>
  </div>
);

// Category Skeleton
export const CategorySkeleton = () => (
  <div className="flex flex-col items-center p-4 lg:p-6 rounded-3xl bg-white">
    <div className="w-16 h-16 lg:w-20 lg:h-20 skeleton-shimmer rounded-2xl mb-3" />
    <div className="h-4 skeleton-shimmer rounded-lg w-16 mb-2" />
    <div className="h-3 skeleton-shimmer rounded-lg w-12" />
  </div>
);

// Offer Card Skeleton
export const OfferCardSkeleton = () => (
  <div className="flex-shrink-0 w-[300px] sm:w-[340px] h-[200px] skeleton-shimmer rounded-3xl" />
);

// Product Grid Skeleton
export const ProductGridSkeleton = ({ count = 10 }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
    {Array.from({ length: count }).map((_, idx) => (
      <ProductCardSkeleton key={idx} />
    ))}
  </div>
);

// Categories Skeleton
export const CategoriesSkeleton = ({ count = 8 }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
    {Array.from({ length: count }).map((_, idx) => (
      <CategorySkeleton key={idx} />
    ))}
  </div>
);

// Empty States
export const EmptyCart = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col items-center justify-center h-full text-center px-6 py-12"
  >
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1 }}
      className="w-32 h-32 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full
                flex items-center justify-center mb-6"
    >
      <motion.span
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-6xl"
      >
        🛒
      </motion.span>
    </motion.div>
    <h3 className="font-display text-xl font-bold text-neutral-800 mb-2">
      Your cart is empty
    </h3>
    <p className="text-neutral-500 mb-6 max-w-xs">
      Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
    </p>
    <motion.button
      onClick={onClose}
      className="btn-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Start Shopping
    </motion.button>
  </motion.div>
);

export const EmptySearch = ({ query }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-16 text-center"
  >
    <motion.div
      className="w-32 h-32 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full
                flex items-center justify-center mb-6"
    >
      <motion.span
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-6xl"
      >
        🔍
      </motion.span>
    </motion.div>
    <h3 className="font-display text-xl font-bold text-neutral-800 mb-2">
      No results found
    </h3>
    <p className="text-neutral-500 max-w-md">
      We couldn't find any products matching "<span className="font-medium text-neutral-700">{query}</span>".
      Try a different search term.
    </p>
    <div className="mt-6 flex flex-wrap gap-2 justify-center">
      <span className="text-sm text-neutral-400">Try:</span>
      {['Fruits', 'Vegetables', 'Dairy', 'Snacks'].map((suggestion) => (
        <motion.button
          key={suggestion}
          className="px-3 py-1.5 bg-primary-50 text-primary-600 rounded-lg text-sm font-medium
                   hover:bg-primary-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {suggestion}
        </motion.button>
      ))}
    </div>
  </motion.div>
);

export const EmptyCategory = ({ category }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-16 text-center"
  >
    <div className="w-32 h-32 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full
                  flex items-center justify-center mb-6">
      <span className="text-6xl">📦</span>
    </div>
    <h3 className="font-display text-xl font-bold text-neutral-800 mb-2">
      Coming Soon!
    </h3>
    <p className="text-neutral-500 max-w-md">
      We're stocking up on {category} products. Check back soon for fresh arrivals!
    </p>
  </motion.div>
);

// Loading Spinner
export const LoadingSpinner = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} border-4 border-primary-200 border-t-primary-600 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

// Page Loading
export const PageLoading = () => (
  <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl
                    flex items-center justify-center shadow-lg shadow-primary-500/30 mb-4">
        <span className="text-white font-bold text-2xl">F</span>
      </div>
      <LoadingSpinner />
      <p className="mt-4 text-neutral-500 font-medium">Loading fresh products...</p>
    </motion.div>
  </div>
);

export default {
  ProductCardSkeleton,
  CategorySkeleton,
  OfferCardSkeleton,
  ProductGridSkeleton,
  CategoriesSkeleton,
  EmptyCart,
  EmptySearch,
  EmptyCategory,
  LoadingSpinner,
  PageLoading
};
