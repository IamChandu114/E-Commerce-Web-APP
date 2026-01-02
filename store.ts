import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              isOpen: true,
            };
          }

          return {
            items: [...state.items, { product, quantity: 1 }],
            isOpen: true,
          };
        }),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => item.product.id !== productId)
              : state.items.map((item) =>
                  item.product.id === productId ? { ...item, quantity } : item
                ),
        })),

      clearCart: () => set({ items: [] }),

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      setCartOpen: (open) => set({ isOpen: open }),

      totalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      totalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        ),
    }),
    {
      name: 'cart-storage',
    }
  )
);

// Sample products data
export const products: Product[] = [
  {
    id: '1',
    name: 'Artisan Ceramic Vase',
    price: 89,
    image: '/products/vase.jpg',
    category: 'Home',
    description: 'Hand-crafted ceramic vase with natural glaze finish.',
  },
  {
    id: '2',
    name: 'Linen Throw Blanket',
    price: 145,
    image: '/products/blanket.jpg',
    category: 'Home',
    description: 'Premium European linen blanket in soft neutral tones.',
  },
  {
    id: '3',
    name: 'Botanical Candle Set',
    price: 65,
    image: '/products/candles.jpg',
    category: 'Home',
    description: 'Set of three soy candles with essential oil blends.',
  },
  {
    id: '4',
    name: 'Leather Weekender Bag',
    price: 295,
    image: '/products/bag.jpg',
    category: 'Accessories',
    description: 'Full-grain leather travel bag with brass hardware.',
  },
  {
    id: '5',
    name: 'Merino Wool Scarf',
    price: 78,
    image: '/products/scarf.jpg',
    category: 'Accessories',
    description: 'Lightweight merino wool scarf in timeless colors.',
  },
  {
    id: '6',
    name: 'Handwoven Basket',
    price: 120,
    image: '/products/basket.jpg',
    category: 'Home',
    description: 'Artisan-made storage basket from natural materials.',
  },
  {
    id: '7',
    name: 'Ceramic Dinnerware Set',
    price: 185,
    image: '/products/dinnerware.jpg',
    category: 'Home',
    description: 'Minimal stoneware set for four with organic shapes.',
  },
  {
    id: '8',
    name: 'Cashmere Beanie',
    price: 95,
    image: '/products/beanie.jpg',
    category: 'Accessories',
    description: '100% cashmere knit beanie in classic silhouette.',
  },
];

export const categories = ['All', 'Home', 'Accessories'];
