import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      pathname === path
        ? "bg-blue-600 text-white shadow"
        : "text-blue-600 hover:bg-blue-50"
    }`;

  return (
    <nav className="bg-white border-b shadow-sm p-4 flex gap-3">
      <Link to="/" className={linkClass("/")}>Dashboard</Link>
      <Link to="/products" className={linkClass("/products")}>Products</Link>
    </nav>
  );
}
