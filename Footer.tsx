import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer id="about" className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold mb-4">Maison</h2>
            <p className="text-background/70 max-w-md mb-6">
              Curating thoughtfully designed pieces for modern living. Each item tells a story of artisan craftsmanship and timeless beauty.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">All Products</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Home Collection</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Accessories</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Returns & Exchanges</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">© 2026 Maison. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
