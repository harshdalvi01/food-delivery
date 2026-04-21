import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ShoppingCart, User, MapPin, ChevronDown,
  Clock, X, TrendingUp, History
} from 'lucide-react';
import { deliveryLocations } from '../data/sampleData';

const Navbar = ({ cartItems, onCartClick, onSearch, userName = "Harsh" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(deliveryLocations[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches] = useState(['Milk', 'Bread', 'Eggs', 'Bananas']);
  const [trendingSearches] = useState(['Organic Vegetables', 'Fresh Fruits', 'Dairy Products']);
  const searchRef = useRef(null);

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearchSelect = (query) => {
    setSearchQuery(query);
    onSearch(query);
    setIsSearchFocused(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect-strong shadow-lg'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo & Greeting */}
          <div className="flex items-center gap-4">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600
                            rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30
                            hover:shadow-xl hover:shadow-primary-500/40 transition-shadow duration-300">
                <span className="text-white font-bold text-xl lg:text-2xl">F</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-xl text-neutral-800">
                  Fresh<span className="text-primary-600">Cart</span>
                </h1>
                <div className="flex items-center gap-1 text-[10px] text-neutral-500 font-medium">
                  <Clock className="w-3 h-3" />
                  <span>DELIVERY IN 10 MINS</span>
                </div>
              </div>
            </motion.div>

            {/* Greeting - Desktop */}
            <div className="hidden lg:block pl-6 border-l border-neutral-200">
              <p className="text-sm text-neutral-500">{getGreeting()},</p>
              <p className="font-semibold text-neutral-800 flex items-center gap-1">
                {userName} <span className="text-lg">👋</span>
              </p>
            </div>
          </div>

          {/* Location Selector */}
          <div className="hidden md:block relative">
            <motion.button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl hover:bg-neutral-100/80
                       transition-all duration-200 group"
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 bg-primary-50 rounded-xl flex items-center justify-center
                            group-hover:bg-primary-100 transition-colors">
                <MapPin className="w-5 h-5 text-primary-600" />
              </div>
              <div className="text-left">
                <p className="text-xs text-neutral-400 font-medium">Deliver to</p>
                <p className="text-sm font-semibold text-neutral-800 flex items-center gap-1">
                  {selectedLocation.split(',')[0]}
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200
                    ${isLocationOpen ? 'rotate-180' : ''}`} />
                </p>
              </div>
            </motion.button>

            {/* Location Dropdown */}
            <AnimatePresence>
              {isLocationOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl
                           border border-neutral-100 overflow-hidden z-50"
                >
                  <div className="p-2">
                    {deliveryLocations.map((location, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => {
                          setSelectedLocation(location);
                          setIsLocationOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left rounded-xl transition-all duration-200
                          flex items-center gap-3 group ${
                          selectedLocation === location
                            ? 'bg-primary-50 text-primary-700'
                            : 'hover:bg-neutral-50 text-neutral-700'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <MapPin className={`w-4 h-4 ${
                          selectedLocation === location ? 'text-primary-500' : 'text-neutral-400'
                        }`} />
                        <span className="font-medium">{location}</span>
                        {selectedLocation === location && (
                          <motion.div
                            layoutId="location-indicator"
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

          {/* Search Bar */}
          <div className="hidden lg:block flex-1 max-w-xl mx-8 relative" ref={searchRef}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search for groceries, brands & more..."
                className="search-input w-full"
              />
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(''); onSearch(''); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full
                           bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center
                           transition-colors"
                >
                  <X className="w-3 h-3 text-neutral-600" />
                </button>
              )}
            </div>

            {/* Search Suggestions Dropdown */}
            <AnimatePresence>
              {isSearchFocused && !searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl
                           border border-neutral-100 overflow-hidden z-50"
                >
                  {/* Recent Searches */}
                  <div className="p-4 border-b border-neutral-100">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                      <History className="w-4 h-4" />
                      <span className="font-medium">Recent Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => handleSearchSelect(search)}
                          className="px-3 py-1.5 bg-neutral-100 hover:bg-primary-50 hover:text-primary-700
                                   rounded-lg text-sm font-medium text-neutral-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {search}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Trending */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                      <TrendingUp className="w-4 h-4 text-accent-500" />
                      <span className="font-medium">Trending Now</span>
                    </div>
                    <div className="space-y-1">
                      {trendingSearches.map((search, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => handleSearchSelect(search)}
                          className="w-full px-3 py-2.5 text-left hover:bg-neutral-50 rounded-lg
                                   flex items-center gap-3 group transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <span className="w-6 h-6 bg-accent-100 rounded-lg flex items-center justify-center
                                         text-xs font-bold text-accent-600">
                            {idx + 1}
                          </span>
                          <span className="font-medium text-neutral-700 group-hover:text-primary-600 transition-colors">
                            {search}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Button */}
            <motion.button
              onClick={onCartClick}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-2xl
                       bg-primary-50 hover:bg-primary-100 transition-all duration-200 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform" />
                <AnimatePresence>
                  {cartItemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-accent-500 text-white text-xs
                               rounded-full flex items-center justify-center font-bold shadow-lg"
                    >
                      {cartItemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <span className="hidden sm:block text-sm font-semibold text-primary-700">Cart</span>
              {cartItemCount > 0 && (
                <span className="hidden sm:block text-xs font-bold text-primary-600 bg-primary-100
                               px-2 py-0.5 rounded-lg">
                  ₹{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}
                </span>
              )}
            </motion.button>

            {/* Profile Button */}
            <motion.button
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl
                       hover:bg-neutral-100 transition-all duration-200 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl
                            flex items-center justify-center group-hover:from-primary-50 group-hover:to-primary-100
                            transition-all duration-300">
                <User className="w-5 h-5 text-neutral-600 group-hover:text-primary-600 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-neutral-700 group-hover:text-primary-600 transition-colors">
                Login
              </span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search groceries..."
              className="search-input w-full"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
