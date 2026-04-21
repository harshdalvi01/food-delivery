import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ShoppingCart,
  User,
  Heart,
  Search,
  Package,
  Leaf,
  Gauge,
  Users,
  Wallet,
  Shield,
  ShieldCheck,
  Sparkles,
  Truck,
  Tags,
  Plus,
  ChevronDown,
  Star,
} from 'lucide-react';

const navLinks = ['Home', 'Categories', 'Deals', 'About', 'Contact'];

const valuePills = ['10 min delivery', 'No hidden charges', 'Freshness guarantee'];

const heroFloatingCards = [
  { title: 'Delivery in 10 min', subtitle: 'Across major locations', icon: Gauge },
  { title: 'Fresh Quality Checked', subtitle: 'Handpicked daily stock', icon: Shield },
  { title: 'Best Prices', subtitle: 'Smart savings every day', icon: Tags },
];

const stats = [
  { icon: Users, value: '750K+', label: 'Happy Customers' },
  { icon: Package, value: '25M+', label: 'Orders Delivered' },
  { icon: Leaf, value: '4,000+', label: 'Fresh Products' },
  { icon: Truck, value: '38', label: 'Cities Served' },
];

const highlights = [
  { icon: Sparkles, title: 'Select Products', text: 'Browse curated categories and pick your essentials in seconds.' },
  { icon: Wallet, title: 'Fast Checkout', text: 'Simple checkout flow with transparent pricing and secure payments.' },
  { icon: Truck, title: 'Track Delivery', text: 'Live updates from dispatch to doorstep with accurate timing.' },
];

const categories = [
  { name: 'Vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=220&q=80' },
  { name: 'Fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=220&q=80' },
  { name: 'Dairy', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=220&q=80' },
  { name: 'Snacks', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=220&q=80' },
  { name: 'Beverages', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=220&q=80' },
  { name: 'Bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=220&q=80' },
  { name: 'Household', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=220&q=80' },
  { name: 'Dry Fruits', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=220&q=80' },
];

const featuredProducts = [
  {
    name: 'Fresh Strawberry',
    price: '$8.00',
    oldPrice: '$10.00',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=560&q=80',
  },
  {
    name: 'Organic Cauliflower',
    price: '$12.00',
    oldPrice: '$15.00',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?w=560&q=80',
  },
  {
    name: 'Yellow Lemon',
    price: '$8.00',
    oldPrice: '$10.00',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=560&q=80',
  },
  {
    name: 'Fresh Apple',
    price: '$12.00',
    oldPrice: '$15.00',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=560&q=80',
  },
];

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Working Professional',
    quote: 'I place an order during a short break and it arrives before my next meeting. Super reliable.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
  },
  {
    name: 'Rohan M.',
    role: 'College Student',
    quote: 'Great pricing and really fast delivery. The flow is smooth and checkout never feels confusing.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80',
  },
  {
    name: 'Ananya K.',
    role: 'Home Chef',
    quote: 'Fresh quality is consistently good. Produce looks premium and the delivery quality is excellent.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
  },
];

const faqs = [
  {
    q: 'What is the minimum order value?',
    a: 'There is no strict minimum for most locations. Delivery fees may vary based on distance and demand.',
  },
  {
    q: 'Can I schedule delivery?',
    a: 'Yes. You can choose instant delivery or pick a short time window when available in your area.',
  },
  {
    q: 'How do refunds work?',
    a: 'If there is a quality issue, report it from your order history. Eligible refunds are processed quickly.',
  },
];

function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">{label}</p>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-neutral-900">{title}</h2>
      <p className="mt-4 text-neutral-600 text-lg leading-relaxed">{subtitle}</p>
    </div>
  );
}

function LandingPage({ onContinue }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const BottomCardIcon = heroFloatingCards[2].icon;   

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfdf9] text-neutral-900">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 shadow-[0_10px_28px_rgba(17,24,39,0.08)] backdrop-blur-md' : 'bg-white/80'
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1320px] items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="font-display text-2xl font-bold text-neutral-900">
              Fresh<span className="text-primary-600">Cart</span>
            </p>
          </div>

          <nav className="mx-auto hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-semibold text-neutral-600 transition-colors duration-300 hover:text-primary-700"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden h-11 items-center gap-2 rounded-2xl bg-neutral-100 px-3 md:flex md:w-[260px] lg:w-[320px]">
              <Search className="h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search groceries"
                className="w-full bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none"
              />
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
              <Heart className="h-4 w-4 text-neutral-600" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
              <ShoppingCart className="h-4 w-4 text-neutral-600" />
            </button>
            <button className="hidden h-10 w-10 items-center justify-center rounded-xl bg-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 sm:flex">
              <User className="h-4 w-4 text-neutral-600" />
            </button>
            <button onClick={onContinue} className="btn-primary px-4 py-2.5 text-sm">
              Login / Signup
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-[#f7fff7] to-[#fffdf6]">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary-200/45 blur-3xl" />
        <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-accent-200/35 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1320px] px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="grid items-center gap-12 md:grid-cols-2 lg:gap-16"
          >
            <div>
              <p className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-soft">
                Grocery delivery that respects your time
              </p>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.04] text-neutral-900 md:text-6xl">
                Your daily grocery run,
                <span className="block text-primary-700">reimagined for speed</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
                Get fruits, vegetables, dairy, and essentials delivered in minutes with quality-first sourcing and pricing you can trust.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {valuePills.map((pill) => (
                  <span key={pill} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-soft">
                    {pill}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={onContinue} className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base">
                  Start Shopping
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-neutral-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Categories
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
                alt="Fresh groceries"
                className="h-[430px] w-full rounded-2xl object-cover shadow-[0_30px_70px_rgba(17,24,39,0.16)] lg:h-[540px]"
              />

              <div className="absolute -left-6 top-8 hidden space-y-3 md:block">
                {heroFloatingCards.slice(0, 2).map((card) => (
                  <div key={card.title} className="w-56 rounded-2xl bg-white p-4 shadow-[0_14px_30px_rgba(17,24,39,0.12)]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                        <card.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-neutral-900">{card.title}</p>
                        <p className="text-xs text-neutral-500">{card.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-6 right-4 hidden w-56 rounded-2xl bg-white p-4 shadow-[0_14px_30px_rgba(17,24,39,0.12)] md:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <BottomCardIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">{heroFloatingCards[2].title}</p>
                    <p className="text-xs text-neutral-500">{heroFloatingCards[2].subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-6 shadow-[0_10px_26px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(17,24,39,0.12)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <stat.icon className="h-5 w-5" />
                </span>
                <p className="mt-5 font-display text-4xl font-bold text-neutral-900">{stat.value}</p>
                <p className="mt-2 text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" id="how-it-works">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Fast checkout, predictable delivery"
            subtitle="A clean 3-step flow from discovery to doorstep with smooth interactions."
          />

          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-12 hidden h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 md:block" />
            {highlights.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative rounded-2xl bg-white p-7 shadow-[0_10px_26px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(17,24,39,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <step.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary-700">Step {index + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-neutral-900">{step.title}</h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 lg:py-24 bg-gradient-to-b from-[#f5fff5] to-white">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Categories"
            title="Shop by Category"
            subtitle="Find essentials faster through visual categories designed for quick discovery."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group rounded-2xl bg-white p-4 text-center shadow-[0_10px_26px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(17,24,39,0.12)]"
              >
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-2xl sm:h-24 sm:w-24">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-neutral-900">{category.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Featured Products"
            title="Best sellers this week"
            subtitle="Larger product cards, cleaner spacing, and instant add-to-cart actions."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group rounded-2xl bg-white p-4 shadow-[0_10px_26px_rgba(17,24,39,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(17,24,39,0.12)]"
              >
                <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                  {product.discount}
                </span>
                <img src={product.image} alt={product.name} className="mt-4 h-52 w-full rounded-2xl object-cover" />
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{product.name}</h3>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xl font-bold text-primary-700">{product.price}</span>
                  <span className="text-sm text-neutral-400 line-through">{product.oldPrice}</span>
                </div>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-primary-700">
                  <Plus className="h-4 w-4" />
                  Add to Cart
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 p-8 text-white shadow-[0_24px_40px_rgba(34,197,94,0.25)] lg:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">Fresh Deals</p>
                <h3 className="mt-5 font-display text-4xl font-bold">Fresh Vegetables Delivered Daily</h3>
                <p className="mt-4 text-primary-50 leading-relaxed">
                  Stock up on handpicked greens, fruits, and pantry staples with lightning-fast delivery and everyday savings.
                </p>
                <button onClick={onContinue} className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary-700 transition-all duration-300 hover:-translate-y-0.5">
                  Browse Products
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&q=80"
                alt="Vegetables"
                className="h-72 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#f3fff3] to-white">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-[0_18px_32px_rgba(17,24,39,0.08)] lg:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <p className="inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">Weekly Saver Combo</p>
                <h3 className="mt-5 font-display text-4xl font-bold text-neutral-900">Save more on family essentials</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Unlock curated bundles for breakfast, snacks, and daily cooking staples with additional member-only discounts.
                </p>
                <button onClick={onContinue} className="mt-6 rounded-xl bg-primary-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700">
                  Unlock Deals
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
                alt="Grocery basket"
                className="h-72 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-[#f9fff8]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Loved By Customers"
            title="Real feedback from real shoppers"
            subtitle="See what regular customers say about delivery speed and product quality."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-2xl bg-white p-6 shadow-[0_10px_26px_rgba(17,24,39,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-neutral-900">{item.name}</p>
                    <p className="text-sm text-neutral-500">{item.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="mt-4 h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-neutral-700 leading-relaxed">"{item.quote}"</blockquote>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1060px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Answers before you get started"
            subtitle="Clear policies and transparent support so users feel confident."
          />

          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => (
              <div key={item.q} className="rounded-2xl bg-white p-5 shadow-[0_10px_26px_rgba(17,24,39,0.06)]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-semibold text-neutral-900">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 text-neutral-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-neutral-600">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
        <div className="mx-auto w-full max-w-[980px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Get Your Groceries Delivered in Minutes</h2>
          <p className="mt-5 text-lg text-primary-50">
            Join FreshCart today and enjoy ultra-fast delivery, quality-first produce, and clear pricing.
          </p>
          <button
            onClick={onContinue}
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-bold text-primary-700 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Shopping
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              <Truck className="h-4 w-4" /> Fast Delivery
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              <ShieldCheck className="h-4 w-4" /> Fresh Quality
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              <Tags className="h-4 w-4" /> Best Prices
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
