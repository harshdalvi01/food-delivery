import { motion, AnimatePresence } from 'framer-motion';
import { Home, Search, Grid3X3, ShoppingCart, User } from 'lucide-react';

const MobileNav = ({ activeTab = 'home', onTabChange, cartItemCount = 0, onCartClick }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'categories', label: 'Categories', icon: Grid3X3 },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, badge: cartItemCount },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const handleTabClick = (tabId) => {
    if (tabId === 'cart') {
      onCartClick?.();
    } else {
      onTabChange?.(tabId);
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden
               bg-white/95 backdrop-blur-xl border-t border-neutral-200/50
               px-2 pt-2 pb-safe shadow-[0_-4px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative flex flex-col items-center gap-1 py-2 px-4 rounded-2xl
                        transition-all duration-300 no-tap-highlight
                        ${isActive ? 'text-primary-600' : 'text-neutral-400'}`}
              whileTap={{ scale: 0.9 }}
            >
              {/* Active Background */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-primary-50 rounded-2xl"
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <div className="relative z-10">
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon className={`w-6 h-6 transition-colors ${isActive ? 'text-primary-600' : ''}`} />
                </motion.div>

                {/* Badge */}
                <AnimatePresence>
                  {tab.badge > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent-500 text-white
                               text-[10px] font-bold rounded-full flex items-center justify-center
                               shadow-lg"
                    >
                      {tab.badge > 9 ? '9+' : tab.badge}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Label */}
              <span className={`text-[10px] font-medium relative z-10 transition-colors
                ${isActive ? 'text-primary-600' : 'text-neutral-500'}`}>
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default MobileNav;
