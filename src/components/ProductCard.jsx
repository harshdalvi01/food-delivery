import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus, Minus, Star, ShoppingBag, Sparkles } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, cartItem, onWishlist, isWishlisted = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showAddedAnimation, setShowAddedAnimation] = useState(false);
  const [isLiked, setIsLiked] = useState(isWishlisted);

  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    onAddToCart(product, quantity + 1);
    setShowAddedAnimation(true);
    setTimeout(() => setShowAddedAnimation(false), 800);
  };

  const handleIncrement = () => {
    onAddToCart(product, quantity + 1);
  };

  const handleDecrement = () => {
    onAddToCart(product, quantity - 1);
  };

  const handleWishlist = () => {
    setIsLiked(!isLiked);
    onWishlist?.(product.id);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-lifted
                transition-shadow duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        {/* Skeleton while loading */}
        <AnimatePresence>
          {!imageLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 skeleton-shimmer"
            />
          )}
        </AnimatePresence>

        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700
                     ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                     group-hover:scale-110`}
        />

        {/* Gradient Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        />

        {/* Badges Container */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          <AnimatePresence>
            {product.discount > 0 && (
              <motion.span
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                className="badge-discount shadow-lg"
              >
                {product.discount}% OFF
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {product.isNew && (
              <motion.span
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="badge-new flex items-center gap-1 shadow-lg"
              >
                <Sparkles className="w-3 h-3" />
                NEW
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Wishlist Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered || isLiked ? 1 : 0,
            scale: isHovered || isLiked ? 1 : 0.8
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWishlist}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center
                    backdrop-blur-sm shadow-lg transition-colors duration-300
                    ${isLiked
                      ? 'bg-red-500 text-white'
                      : 'bg-white/90 text-neutral-400 hover:text-red-500'
                    }`}
        >
          <Heart className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'fill-current scale-110' : ''}`} />
        </motion.button>

        {/* Quick Add Button on Image - Desktop */}
        <AnimatePresence>
          {isHovered && quantity === 0 && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="absolute bottom-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center
                       bg-primary-500 text-white shadow-lg shadow-primary-500/40
                       hover:bg-primary-600 transition-colors z-10"
            >
              <Plus className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Quantity Stepper on Image - Desktop */}
        <AnimatePresence>
          {isHovered && quantity > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-3 right-3 flex items-center bg-white rounded-xl shadow-lg
                       overflow-hidden z-10"
            >
              <motion.button
                whileHover={{ backgroundColor: '#f0fdf4' }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDecrement}
                className="p-2 transition-colors"
              >
                <Minus className="w-4 h-4 text-primary-600" />
              </motion.button>
              <motion.span
                key={quantity}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="px-3 font-bold text-primary-700"
              >
                {quantity}
              </motion.span>
              <motion.button
                whileHover={{ backgroundColor: '#f0fdf4' }}
                whileTap={{ scale: 0.9 }}
                onClick={handleIncrement}
                className="p-2 transition-colors"
              >
                <Plus className="w-4 h-4 text-primary-600" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Added to Cart Animation */}
        <AnimatePresence>
          {showAddedAnimation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-primary-500/20 backdrop-blur-sm z-20"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-xl"
              >
                <ShoppingBag className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-neutral-700">{product.rating}</span>
            <span className="text-xs text-neutral-400">({product.reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-neutral-800 line-clamp-2 mb-1 min-h-[2.5rem]
                     group-hover:text-primary-600 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Quantity Label */}
        <p className="text-sm text-neutral-500 mb-3">{product.quantity}</p>

        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-neutral-900">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-neutral-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {/* Mobile Add Button */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              {quantity === 0 ? (
                <motion.button
                  key="add-mobile"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="px-4 py-2 rounded-xl font-semibold text-sm
                           bg-primary-500 text-white shadow-md shadow-primary-500/30
                           active:bg-primary-600 transition-colors"
                >
                  Add
                </motion.button>
              ) : (
                <motion.div
                  key="stepper-mobile"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="flex items-center bg-primary-50 rounded-xl border-2 border-primary-200"
                >
                  <button
                    onClick={handleDecrement}
                    className="p-1.5 active:bg-primary-100 rounded-l-lg transition-colors"
                  >
                    <Minus className="w-4 h-4 text-primary-600" />
                  </button>
                  <span className="px-2 font-bold text-sm text-primary-700">{quantity}</span>
                  <button
                    onClick={handleIncrement}
                    className="p-1.5 active:bg-primary-100 rounded-r-lg transition-colors"
                  >
                    <Plus className="w-4 h-4 text-primary-600" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600
                  origin-left"
      />
    </motion.div>
  );
};

export default ProductCard;
