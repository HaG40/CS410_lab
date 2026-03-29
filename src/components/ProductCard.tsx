import type { Product } from "../types";

interface Props {
  product: Product;
  onIncrease: () => void;
  onDecrease: () => void;
  onDelete: () => void;
}

export default function ProductCard({
  product,
  onIncrease,
  onDecrease,
  onDelete,
}: Props) {
 return (
    <div
      className={`p-5 rounded-2xl border shadow-sm transition hover:shadow-md ${
        product.quantity === 0
          ? "bg-red-50 border-red-200"
          : "bg-white border-blue-100"
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-semibold text-lg text-blue-700">
            {product.name}
          </h2>
          <p className="text-gray-600 text-sm mt-1">ราคา {product.price} บาท</p>
        </div>

        {product.quantity === 0 && (
          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">
            สินค้าหมด
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-700">
          จำนวนคงเหลือ: <span className="font-semibold">{product.quantity}</span>
        </p>

        <div className="flex gap-2">
          <button
            onClick={onIncrease}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg"
          >
            +
          </button>
          <button
            onClick={onDecrease}
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-lg"
          >
            −
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}