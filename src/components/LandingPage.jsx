import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgePercent,
  Clock3,
  ShieldCheck,
  Sparkles,
  Truck,
  Wallet,
  ChevronDown,
  Star,
} from 'lucide-react';

const valuePills = ['10 min average delivery', 'No hidden charges', 'Freshness guarantee'];

const highlights = [
  { icon: Clock3, title: 'Ultra-fast delivery', text: 'Essentials at your door in around 10 minutes.' },
  { icon: ShieldCheck, title: 'Quality checked daily', text: 'Handpicked produce and trusted dairy every day.' },
  { icon: BadgePercent, title: 'Deals that matter', text: 'Smart bundles and daily drops to save more.' },
];

const categories = [
  { name: 'Vegetables', emoji: '🥬', desc: 'Farm-fresh greens and everyday basics' },
  { name: 'Fruits', emoji: '🍊', desc: 'Seasonal fruits delivered fresh and juicy' },
  { name: 'Dairy', emoji: '🥛', desc: 'Milk, curd, paneer and breakfast essentials' },
  { name: 'Snacks', emoji: '🍿', desc: 'Evening cravings, chips, cookies and more' },
  { name: 'Beverages', emoji: '🥤', desc: 'Juices, soft drinks and energy boosts' },
  { name: 'Bakery', emoji: '🥖', desc: 'Fresh breads, buns and sweet bites' },
];

const steps = [
  { icon: Sparkles, title: 'Select what you need', text: 'Browse categories and add products in seconds.' },
  { icon: Wallet, title: 'Pay securely', text: 'Simple checkout with clear pricing and no surprises.' },
  { icon: Truck, title: 'Track in real time', text: 'Watch your order arrive from store to doorstep.' },
];

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Working Professional',
    quote: 'Perfect for weekdays. I order in a break and groceries arrive before my next meeting.',
  },
  {
    name: 'Rohan M.',
    role: 'College Student',
    quote: 'Fast delivery and fair prices. The app is clean and checkout is genuinely easy.',
  },
  {
    name: 'Ananya K.',
    role: 'Home Chef',
    quote: 'The produce quality is consistently great. The recommendations are useful too.',
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
      <p className="text-sm font-semibold uppercase tracking-widest text-primary-700">{label}</p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-neutral-900">{title}</h2>
      <p className="mt-3 text-neutral-600 text-lg">{subtitle}</p>
    </div>
  );
}

function LandingPage({ onContinue }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-neutral-50">
      <header className="sticky top-0 z-40 border-b border-white/50 bg-white/75 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center font-bold shadow-soft">
              F
            </div>
            <p className="font-display text-xl font-bold text-neutral-900">
              Fresh<span className="text-primary-600">Cart</span>
            </p>
          </div>
          <button onClick={onContinue} className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2.5">
            Login
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-primary-200/50 blur-3xl" />
        <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-accent-200/45 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            <div>
              <p className="inline-flex items-center px-4 py-2 rounded-full bg-white/85 border border-primary-100 text-primary-700 font-semibold text-sm shadow-soft">
                Grocery delivery that respects your time
              </p>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Your daily grocery run,
                <span className="block bg-gradient-to-r from-primary-700 to-accent-500 bg-clip-text text-transparent">
                  reimagined for speed.
                </span>
              </h1>
              <p className="mt-5 text-lg text-neutral-600 max-w-xl">
                From fruits and vegetables to pantry staples, FreshCart brings everything together in one smooth experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {valuePills.map((pill) => (
                  <span key={pill} className="px-3.5 py-2 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700">
                    {pill}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button onClick={onContinue} className="btn-primary inline-flex items-center justify-center gap-3">
                  Start with Login
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a href="#how-it-works" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Explore how it works
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="glass-card p-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-neutral-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '4.8/5', label: 'Average rating' },
              { value: '300K+', label: 'Orders delivered' },
              { value: '2,000+', label: 'Products listed' },
              { value: '22', label: 'Cities served' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-neutral-200 bg-neutral-50 px-5 py-6 text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-neutral-900">{stat.value}</p>
                <p className="mt-1 text-sm sm:text-base text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Fast checkout, predictable delivery"
            subtitle="A simple flow designed to reduce friction from discovery to doorstep."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                  <step.icon className="w-6 h-6" />
                </div>
                <p className="mt-4 text-sm font-semibold text-primary-700">Step {index + 1}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-neutral-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Categories"
            title="Everything you need for the week"
            subtitle="Discover popular picks with clear labels and quick access."
          />

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="card-interactive p-5"
              >
                <p className="text-4xl">{category.emoji}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-neutral-900">{category.name}</h3>
                <p className="mt-1 text-neutral-600">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Loved By Customers"
            title="Real feedback from real shoppers"
            subtitle="Designed around speed, trust, and consistency."
          />

          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {testimonials.map((item, index) => (
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <div className="flex gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-neutral-700 leading-relaxed">"{item.quote}"</blockquote>
                <figcaption className="mt-5">
                  <p className="font-semibold text-neutral-900">{item.name}</p>
                  <p className="text-sm text-neutral-500">{item.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Answers before you get started"
            subtitle="Clear policies and transparent support so users feel confident."
          />

          <div className="mt-10 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-neutral-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold text-neutral-900 flex items-center justify-between gap-4">
                  {item.q}
                  <ChevronDown className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-neutral-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to unlock your grocery dashboard?</h2>
          <p className="mt-4 text-primary-100 text-lg">
            Continue to login and start browsing products, recommendations, and offers personalized for you.
          </p>
          <button
            onClick={onContinue}
            className="mt-8 inline-flex items-center gap-3 bg-white text-primary-700 font-semibold px-7 py-3 rounded-2xl
                     hover:bg-primary-50 transition-colors"
          >
            Continue to Login
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
