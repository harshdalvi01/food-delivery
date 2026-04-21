import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Safety', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
    partner: [
      { name: 'Become a Seller', href: '#' },
      { name: 'Delivery Partner', href: '#' },
      { name: 'Advertise', href: '#' },
      { name: 'Affiliate Program', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-900/20 rounded-full blur-3xl" />

      {/* Newsletter Section */}
      <div className="relative border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="font-display text-3xl font-bold mb-3">
                Stay updated with the best deals!
              </h3>
              <p className="text-neutral-400 text-lg">
                Subscribe to our newsletter for exclusive offers & updates
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-72">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-neutral-800/80 border border-neutral-700
                           rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500
                           focus:border-transparent placeholder:text-neutral-500 transition-all"
                />
              </div>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white
                         font-semibold rounded-2xl shadow-lg shadow-primary-500/30
                         hover:shadow-xl hover:shadow-primary-500/40 transition-all whitespace-nowrap
                         flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl
                            flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl">FreshCart</h2>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Your trusted partner for quick grocery delivery. Fresh products delivered in minutes!
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 bg-neutral-800 rounded-xl flex items-center justify-center
                           text-neutral-400 hover:bg-primary-600 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: columnIdx * 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-5 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={link.href}
                      className="text-neutral-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:18001234567" className="flex items-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors">
                  <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>1800-123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@freshcart.com" className="flex items-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors">
                  <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>support@freshcart.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>123 Business Street, Mumbai, India</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm flex items-center gap-1">
              © 2024 FreshCart. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
            </p>
            <div className="flex items-center gap-6 opacity-60">
              <span className="text-xs font-bold text-blue-400">VISA</span>
              <span className="text-xs font-bold text-red-400">Mastercard</span>
              <span className="text-xs font-bold text-green-400">UPI</span>
              <span className="text-xs font-bold text-purple-400">RuPay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
