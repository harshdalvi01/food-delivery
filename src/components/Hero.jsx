import { motion } from 'framer-motion';
import { ArrowRight, Clock, Truck, Shield, Zap, Play } from 'lucide-react';

const Hero = ({ onCategorySelect }) => {
  const quickCategories = [
    { name: 'Vegetables', emoji: '🥦', color: 'from-green-100 to-green-200', hoverColor: 'hover:shadow-green-200/50' },
    { name: 'Fruits', emoji: '🍎', color: 'from-red-100 to-red-200', hoverColor: 'hover:shadow-red-200/50' },
    { name: 'Dairy', emoji: '🥛', color: 'from-blue-100 to-blue-200', hoverColor: 'hover:shadow-blue-200/50' },
    { name: 'Snacks', emoji: '🍪', color: 'from-amber-100 to-amber-200', hoverColor: 'hover:shadow-amber-200/50' },
    { name: 'Beverages', emoji: '🧃', color: 'from-purple-100 to-purple-200', hoverColor: 'hover:shadow-purple-200/50' },
  ];

  const features = [
    { icon: Clock, text: '10 min delivery', color: 'text-primary-600', bg: 'bg-primary-50' },
    { icon: Truck, text: 'Free delivery', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Shield, text: 'Best quality', color: 'text-amber-600', bg: 'bg-amber-50' },
    { icon: Zap, text: 'Instant refund', color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/80 via-white to-accent-50/80 lg:min-h-[calc(100vh-5rem)]">
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"
        />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-primary-300/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-10 lg:py-4 lg:h-[calc(100vh-5rem)]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center lg:h-full">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:space-y-4"
          >
            <div className="space-y-5 lg:space-y-4">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm
                         rounded-full shadow-lg shadow-primary-100/50 border border-primary-100"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                <span className="text-sm font-semibold text-primary-700">Now delivering in your area</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold
                         text-neutral-900 leading-[1.1] tracking-tight"
              >
                Groceries delivered in{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500
                                 bg-clip-text text-transparent">
                    10 minutes
                  </span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <motion.path
                      d="M2 8 Q100 2 198 8"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-lg text-neutral-600 max-w-lg leading-relaxed"
              >
                Get fresh vegetables, fruits, dairy & more delivered to your doorstep in minutes.
                <span className="text-primary-600 font-semibold"> Quality guaranteed!</span>
              </motion.p>
            </div>

            {/* Quick Category Shortcuts */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Popular categories
              </p>
              <div className="flex flex-wrap gap-2.5">
                {quickCategories.map((cat, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => onCategorySelect?.(cat.name)}
                    className={`bg-gradient-to-br ${cat.color} px-4 py-2.5 rounded-2xl flex items-center gap-2
                              shadow-md ${cat.hoverColor} hover:shadow-xl
                              transition-all duration-300 border border-white/50`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <span className="text-xl">{cat.emoji}</span>
                    <span className="text-sm font-semibold text-neutral-700">{cat.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <motion.button
                className="btn-primary flex items-center justify-center gap-3 text-base px-7 py-3.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="btn-secondary flex items-center justify-center gap-3 px-7 py-3.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Features Strip */}
            <motion.div
              variants={itemVariants}
              className="hidden 2xl:flex flex-wrap gap-3 pt-2"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className={`flex items-center gap-2.5 px-4 py-2.5 ${feature.bg} rounded-xl`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-sm text-neutral-700 font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[28rem] xl:max-w-lg mx-auto">
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-8 border-4 border-dashed border-primary-200/50 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Central Glow */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-64 h-64 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-2xl" />
              </motion.div>

              {/* Floating Product Cards */}
              <motion.div
                className="absolute -left-4 top-8 z-10"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 backdrop-blur-sm
                              border border-white/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl
                                flex items-center justify-center shadow-inner">
                    <span className="text-3xl">🥦</span>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800">Fresh Veggies</p>
                    <p className="text-sm font-semibold text-primary-600">40% OFF</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-2 top-24 z-10"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 backdrop-blur-sm
                              border border-white/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl
                                flex items-center justify-center shadow-inner">
                    <span className="text-3xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800">4.9 Rating</p>
                    <p className="text-sm text-neutral-500">2M+ orders</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute left-4 bottom-28 z-10"
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 backdrop-blur-sm
                              border border-white/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl
                                flex items-center justify-center shadow-inner">
                    <Clock className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800">Super Fast</p>
                    <p className="text-sm text-neutral-500">10 min avg.</p>
                  </div>
                </div>
              </motion.div>

              {/* Product Images Grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-10 xl:gap-5 xl:p-12">
                  {[
                    { src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&q=80", rotate: 6 },
                    { src: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80", rotate: -6 },
                    { src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&q=80", rotate: -4 },
                    { src: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200&q=80", rotate: 4 },
                  ].map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="w-24 h-24 xl:w-28 xl:h-28 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white"
                      style={{ rotate: `${img.rotate}deg` }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + idx * 0.15 }}
                      whileHover={{ rotate: 0, scale: 1.1, zIndex: 10 }}
                    >
                      <img src={img.src} alt="Product" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
