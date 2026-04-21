import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Percent, Clock, Sparkles, Gift } from 'lucide-react';
import { EmptyCart } from './Skeletons';

const CartPanel = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((acc, item) => acc + ((item.originalPrice - item.price) * item.quantity), 0);
  const deliveryFee = subtotal > 500 ? 0 : 29;
  const total = subtotal + deliveryFee;
  const freeDeliveryProgress = Math.min((subtotal / 500) * 100, 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[440px] bg-white shadow-2xl z-50
                      flex flex-col overflow-hidden"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between p-5 border-b border-neutral-100"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl
                           flex items-center justify-center shadow-lg shadow-primary-500/30"
                >
                  <ShoppingBag className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h2 className="font-display font-bold text-xl text-neutral-900">Your Cart</h2>
                  <p className="text-sm text-neutral-500">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="w-10 h-10 rounded-xl hover:bg-neutral-100 flex items-center justify-center
                         transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5 text-neutral-600" />
              </motion.button>
            </motion.div>

            {/* Delivery Time Banner */}
            {cartItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mx-4 mt-4 p-4 bg-gradient-to-r from-primary-50 to-emerald-50 rounded-2xl
                         flex items-center gap-4 border border-primary-100"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-primary-800">Delivery in 10-15 mins</p>
                  <p className="text-sm text-primary-600">Your order is being prepared</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-2xl"
                >
                  🚀
                </motion.div>
              </motion.div>
            )}

            {/* Free Delivery Progress */}
            {cartItems.length > 0 && subtotal < 500 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mx-4 mt-3 p-3 bg-accent-50 rounded-xl border border-accent-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-accent-600" />
                    <span className="text-sm font-medium text-accent-700">
                      Add ₹{(500 - subtotal).toFixed(0)} for free delivery
                    </span>
                  </div>
                  <span className="text-xs text-accent-600 font-bold">{freeDeliveryProgress.toFixed(0)}%</span>
                </div>
                <div className="h-2 bg-accent-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${freeDeliveryProgress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            )}

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              <AnimatePresence mode="popLayout">
                {cartItems.length === 0 ? (
                  <EmptyCart onClose={onClose} />
                ) : (
                  <motion.div className="space-y-3" layout>
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50, height: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-4 p-3 bg-neutral-50 rounded-2xl hover:bg-neutral-100/80
                                 transition-colors group"
                      >
                        {/* Product Image */}
                        <motion.div
                          className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white shadow-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-neutral-800 truncate">{item.name}</h4>
                          <p className="text-sm text-neutral-500">{item.quantity_label}</p>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-baseline gap-2">
                              <span className="font-bold text-neutral-900">
                                ₹{(item.price * item.quantity).toFixed(0)}
                              </span>
                              {item.originalPrice > item.price && (
                                <span className="text-xs text-neutral-400 line-through">
                                  ₹{(item.originalPrice * item.quantity).toFixed(0)}
                                </span>
                              )}
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center bg-white rounded-xl border-2 border-primary-100 overflow-hidden">
                              <motion.button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-primary-50 transition-colors"
                                whileTap={{ scale: 0.9 }}
                              >
                                <Minus className="w-4 h-4 text-primary-600" />
                              </motion.button>
                              <motion.span
                                key={item.quantity}
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                className="px-3 font-bold text-sm text-primary-700"
                              >
                                {item.quantity}
                              </motion.span>
                              <motion.button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-primary-50 transition-colors"
                                whileTap={{ scale: 0.9 }}
                              >
                                <Plus className="w-4 h-4 text-primary-600" />
                              </motion.button>
                            </div>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <motion.button
                          onClick={() => onRemoveItem(item.id)}
                          className="self-start p-2 text-neutral-300 hover:text-red-500 transition-colors
                                   opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart Footer */}
            <AnimatePresence>
              {cartItems.length > 0 && (
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                  className="border-t border-neutral-100 p-5 space-y-4 bg-white"
                >
                  {/* Promo Code */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <Percent className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        className="w-full pl-11 pr-4 py-3 bg-neutral-100 rounded-xl border-2 border-transparent
                                 focus:outline-none focus:border-primary-400 focus:bg-white text-sm
                                 transition-all duration-300"
                      />
                    </div>
                    <motion.button
                      className="w-full sm:w-auto px-5 py-3 bg-neutral-800 text-white rounded-xl font-semibold
                               hover:bg-neutral-900 transition-colors text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply
                    </motion.button>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between text-neutral-600">
                      <span>Subtotal</span>
                      <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                    </div>
                    <AnimatePresence>
                      {savings > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex justify-between text-primary-600"
                        >
                          <span className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            You're saving
                          </span>
                          <span className="font-semibold">-₹{savings.toFixed(2)}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="flex justify-between text-neutral-600">
                      <span>Delivery fee</span>
                      <span className={deliveryFee === 0 ? 'text-primary-600 font-semibold' : ''}>
                        {deliveryFee === 0 ? '✨ FREE' : `₹${deliveryFee}`}
                      </span>
                    </div>
                    <div className="h-px bg-neutral-100 my-2" />
                    <div className="flex justify-between font-bold text-lg text-neutral-900">
                      <span>Total</span>
                      <motion.span
                        key={total}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                      >
                        ₹{total.toFixed(2)}
                      </motion.span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    onClick={onCheckout}
                    className="w-full btn-accent flex items-center justify-center gap-3 py-4 text-lg"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400 pt-2">
                    <span className="flex items-center gap-1">🔒 Secure</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">⚡ Fast</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">↩️ Easy Returns</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartPanel;
