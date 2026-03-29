import { useState } from "react";
import type { Product } from "../types";

export function useInventory() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (name: string, price: number, quantity: number) => {
    setProducts((prev) => [...prev, { id: Date.now(), name, price, quantity }]);
  };

  const updateQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p,
      ),
    );
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, addProduct, updateQuantity, deleteProduct };
}
