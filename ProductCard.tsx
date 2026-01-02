import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, useCartStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick add button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-foreground/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button
            variant="minimal"
            size="lg"
            onClick={() => addItem(product)}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Add to Cart
          </Button>
        </motion.div>

        {/* Category badge */}
        <span className="absolute top-4 left-4 text-xs font-medium uppercase tracking-wider bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {product.category}
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="font-display text-lg font-medium group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {product.description}
        </p>
        <p className="text-base font-medium">${product.price}</p>
      </div>
    </motion.div>
  );
}
