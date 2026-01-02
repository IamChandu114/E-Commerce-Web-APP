import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { InstallPrompt } from '@/components/InstallPrompt';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Features />
      <Footer />
      <CartDrawer />
      <InstallPrompt />
    </div>
  );
};

export default Index;
