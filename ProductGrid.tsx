import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/lib/store';
import { cn } from '@/lib/utils';

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary uppercase tracking-wider"
          >
            Our Collection
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-4"
          >
            Thoughtfully Designed
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md mx-auto"
          >
            Each piece is crafted with care, combining quality materials with timeless aesthetics.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          id="categories"
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
