import { useMemo, useState } from "react";
import type { Product } from "../types";
import ProductCard from "../components/ProductCard";

interface Props {
  products: Product[];
  addProduct: (name: string, price: number, quantity: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  deleteProduct: (id: number) => void;
}

export default function Products({
  products,
  addProduct,
  updateQuantity,
  deleteProduct,
}: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ),
    [products, search]
  );

   const handleAdd = () => {
    if (!name.trim()) return;
    addProduct(name, price, quantity);
    setName("");
    setPrice(0);
    setQuantity(0);
  };
 return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-blue-700">จัดการสินค้า</h1>

      <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm space-y-4">
        <input
          type="text"
          placeholder="ค้นหาสินค้า..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-blue-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 rounded-lg"
        />

        <div className="flex flex-col items-center md:flex-row gap-4">
          <input
            type="text"
            placeholder="ชื่อสินค้า"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="border border-blue-200 p-2 rounded-lg"
          />
          <p className="text-gray-700 font-medium">ราคา</p>
          <input
            type="number"
            placeholder="ราคา"
            value={price} 
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border border-blue-200 p-2 rounded-lg"
          />
          <p className="text-gray-700 font-medium">จำนวน</p>
          <input
            type="number"
            placeholder="จำนวนเริ่มต้น"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-blue-200 p-2 rounded-lg"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full md:w-auto px-5 py-2 font-medium"
          >
            เพิ่มสินค้า
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onIncrease={() => updateQuantity(p.id, 1)}
            onDecrease={() => updateQuantity(p.id, -1)}
            onDelete={() => deleteProduct(p.id)}
          />
        ))}
      </div>
    </div>
  );
}

