import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import OffersCarousel from './components/OffersCarousel';
import ProductGrid from './components/ProductGrid';
import CartPanel from './components/CartPanel';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Recommendations, { FrequentlyBoughtTogether, TrendingNearYou } from './components/Recommendations';
import { EmptySearch, PageLoading } from './components/Skeletons';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import CheckoutPage from './components/CheckoutPage';
import { products } from './data/sampleData';

function Storefront({ userName }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState('store');
  const [lastAddedProduct, setLastAddedProduct] = useState(null);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle adding/updating cart items
  const handleAddToCart = useCallback((product, quantity) => {
    if (quantity > 0) {
      setLastAddedProduct(product);
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (quantity === 0) {
        return prevItems.filter(item => item.id !== product.id);
      }

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity } : item
        );
      }

      return [...prevItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        quantity_label: product.quantity,
        quantity
      }];
    });
  }, []);

  // Handle removing item from cart
  const handleRemoveItem = useCallback((productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  // Handle updating quantity in cart
  const handleUpdateQuantity = useCallback((productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, [handleRemoveItem]);

  // Handle wishlist toggle
  const handleWishlistToggle = useCallback((productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  }, []);

  // Handle search
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    setSelectedCategory(null);
  }, []);

  // Handle category selection
  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(prev => prev === category ? null : category);
    setSearchQuery('');
  }, []);

  // Handle mobile tab change
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setSelectedCategory(null);
      setSearchQuery('');
    }
  }, []);

  // Filter products
  const filteredProducts = products.filter(product => {
    if (searchQuery) {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory) {
      return product.category === selectedCategory;
    }
    return true;
  });

  // Get recommendations (shuffle products for variety)
  const recommendedProducts = [...products].sort(() => Math.random() - 0.5).slice(0, 6);
  const trendingProducts = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 6);

  const frequentlyBoughtProducts = lastAddedProduct
    ? products
      .filter(
        (product) =>
          product.id !== lastAddedProduct.id &&
          product.category === lastAddedProduct.category
      )
      .sort((a, b) => b.reviews - a.reviews)
      .slice(0, 3)
    : [];

  // Cart item count
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Get title based on filter state
  const getProductGridTitle = () => {
    if (searchQuery) return `Search results for "${searchQuery}"`;
    if (selectedCategory) return selectedCategory;
    return 'Best Sellers';
  };

  const getProductGridSubtitle = () => {
    if (searchQuery || selectedCategory) {
      return `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} found`;
    }
    return 'Most popular products this week';
  };

  // Show loading screen
  if (isLoading) {
    return <PageLoading />;
  }

  if (page === 'checkout') {
    return (
      <CheckoutPage
        cartItems={cartItems}
        userName={userName}
        onBack={() => setPage('store')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navbar */}
      <Navbar
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={handleSearch}
        userName={userName}
      />

      {/* Hero Section */}
      <Hero onCategorySelect={handleCategorySelect} />

      {/* Offers Carousel */}
      <OffersCarousel />

      {/* Categories Section */}
      <Categories
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      {/* Products Grid */}
      <ProductGrid
        products={filteredProducts}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        title={getProductGridTitle()}
        subtitle={getProductGridSubtitle()}
        onWishlist={handleWishlistToggle}
        wishlist={wishlist}
      />

      {/* Frequently Bought Together (Shown after first add to cart) */}
      {lastAddedProduct && frequentlyBoughtProducts.length > 0 && (
        <FrequentlyBoughtTogether
          products={frequentlyBoughtProducts}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />
      )}

      {/* Show empty state for no results */}
      {filteredProducts.length === 0 && searchQuery && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <EmptySearch query={searchQuery} />
        </div>
      )}

      {/* Recommendations */}
      <Recommendations
        products={recommendedProducts}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        title="Recommended for You"
        subtitle="Based on your shopping preferences"
        type="recommended"
      />

      {/* Trending Near You */}
      <TrendingNearYou
        products={trendingProducts}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        location="Mumbai"
      />

      {/* Footer */}
      <div className="pb-20 lg:pb-0">
        <Footer />
      </div>

      {/* Cart Panel */}
      <CartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setPage('checkout');
        }}
      />

      {/* Mobile Bottom Navigation */}
      <MobileNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Floating Cart Button - Desktop only now, mobile uses bottom nav */}
      <AnimatePresence>
        {cartItems.length > 0 && !isCartOpen && (
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40
                     bg-gradient-to-r from-primary-500 to-primary-600 text-white
                     px-5 py-4 rounded-2xl shadow-xl shadow-primary-500/40
                     flex items-center gap-4 hover:shadow-2xl hover:shadow-primary-500/50
                     transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <motion.span
                key={cartItemCount}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center
                         text-sm font-bold backdrop-blur-sm"
              >
                {cartItemCount}
              </motion.span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-white/70">Your Cart</p>
              <motion.p
                key={cartTotal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-lg"
              >
                ₹{cartTotal.toFixed(0)}
              </motion.p>
            </div>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center"
            >
              →
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

// Scroll to top component
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-24 lg:bottom-8 left-4 lg:left-8 z-40
                   w-12 h-12 bg-white rounded-xl shadow-lg border border-neutral-200
                   flex items-center justify-center text-neutral-600
                   hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200
                   transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [view, setView] = useState('landing');
  const [userName, setUserName] = useState('Guest');

  const handleLogin = ({ userName: nextUserName }) => {
    setUserName(nextUserName || 'Guest');
    setView('products');
  };

  if (view === 'landing') {
    return <LandingPage onContinue={() => setView('login')} />;
  }

  if (view === 'login') {
    return <LoginPage onLogin={handleLogin} onBack={() => setView('landing')} />;
  }

  return <Storefront userName={userName} />;
}

export default App;
