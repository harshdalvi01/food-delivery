import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/sampleData';

const Categories = ({ onCategorySelect, selectedCategory }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900">
              Shop by Category
            </h2>
            <p className="text-neutral-500 mt-1">Choose from our wide range of products</p>
          </div>
          <motion.button
            className="hidden sm:flex items-center gap-2 text-primary-600 font-semibold
                     hover:text-primary-700 transition-colors group"
            whileHover={{ x: 4 }}
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-5"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => onCategorySelect(category.name)}
              className={`group relative flex flex-col items-center p-4 lg:p-5 rounded-3xl
                       bg-gradient-to-br from-white to-neutral-50
                       border-2 transition-all duration-300
                       ${selectedCategory === category.name
                         ? 'border-primary-400 shadow-lg shadow-primary-100 scale-105'
                         : 'border-transparent hover:border-primary-200 hover:shadow-xl hover:shadow-primary-50'
                       }`}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Category Icon */}
              <motion.div
                className={`w-16 h-16 lg:w-18 lg:h-18 rounded-2xl ${category.bgColor}
                          flex items-center justify-center mb-3 shadow-inner
                          group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: [0, -5, 5, 0] }}
              >
                <span className="text-4xl lg:text-4xl">{category.emoji}</span>
              </motion.div>

              {/* Category Name */}
              <h3 className="font-semibold text-neutral-800 text-sm text-center leading-tight">
                {category.name}
              </h3>

              {/* Item Count */}
              <p className="text-xs text-neutral-400 mt-1">
                {category.itemCount} items
              </p>

              {/* Selection Indicator */}
              <motion.div
                className="absolute -bottom-px left-1/2 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                initial={{ width: 0, x: '-50%' }}
                animate={{
                  width: selectedCategory === category.name ? 32 : 0,
                  x: '-50%'
                }}
                whileHover={{ width: 32 }}
                transition={{ duration: 0.2 }}
              />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity
                            bg-gradient-to-br from-primary-100/50 to-transparent pointer-events-none" />
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="sm:hidden w-full mt-8 py-3.5 text-primary-600 font-semibold
                   border-2 border-primary-200 rounded-2xl
                   hover:bg-primary-50 hover:border-primary-300 transition-all
                   flex items-center justify-center gap-2"
          whileTap={{ scale: 0.98 }}
        >
          View All Categories
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
};

export default Categories;
