import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              New Collection 2026
            </span>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6">
              Curated for
              <br />
              <span className="text-primary">Modern Living</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Discover handcrafted pieces that blend timeless craftsmanship with contemporary design. 
              Each item tells a story of artisan dedication.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#products">
                  Explore Collection
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              
              <Button variant="outline" size="xl" asChild>
                <a href="#about">Our Story</a>
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/hero-image.jpg"
                alt="Curated home collection"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-8 bottom-12 bg-card p-6 rounded-xl shadow-elevated"
            >
              <p className="text-sm text-muted-foreground mb-1">Featured</p>
              <p className="font-display text-lg font-semibold">Artisan Ceramics</p>
              <p className="text-primary font-medium">From $65</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
