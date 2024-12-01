import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">MyApp</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/signup" className="text-white hover:text-gray-300">
            Sign Up
          </Link>
          <Link to="/signin" className="text-white hover:text-gray-300">
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
