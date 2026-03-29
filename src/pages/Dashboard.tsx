import type { Product } from "../types";

interface Props {
  products: Product[];
}

export default function Dashboard({ products }: Props) {
  const totalItems = products.length;
  const totalValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
  const outOfStock = products.filter((p) => p.quantity === 0).length;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">จำนวนรายการสินค้า</p>
          <p className="text-xl font-semibold">{totalItems}</p>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">มูลค่ารวมของสต๊อก</p>
          <p className="text-xl font-semibold">{totalValue.toLocaleString()} บาท</p>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">สินค้าหมด</p>
          <p className="text-xl font-semibold">{outOfStock}</p>
        </div>
      </div>
    </div>
  );
}