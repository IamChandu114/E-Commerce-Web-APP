import { motion } from 'framer-motion';
import { Truck, Shield, Leaf, Heart } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Complimentary shipping on all orders over $100.',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Your transactions are protected with bank-level security.',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description: 'Eco-friendly materials and responsible production.',
  },
  {
    icon: Heart,
    title: 'Made with Care',
    description: 'Each piece is crafted by skilled artisans.',
  },
];

export function Features() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
