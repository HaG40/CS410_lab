import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useInventory } from "./hooks/useInventory";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

export default function App() {
  const inventory = useInventory();

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-gray-100">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Dashboard products={inventory.products} />}
          />
          <Route
            path="/products"
            element={<Products {...inventory} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}